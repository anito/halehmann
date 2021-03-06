<?php
require_once( __DIR__ . '/includes/product_cat_handler.php');
require_once( __DIR__ . '/includes/sender_email.php');

// load post_meta dependend scripts
add_action( 'the_post', 'load_includes' );
function load_includes() {
	global $post;

	$is_sales_checker = !empty( get_post_meta($post->ID, 'sales_checker' ));
	if($is_sales_checker) {
		require_once( __DIR__ . '/includes/sales_checker.php');
		add_action( 'the_post', 'fix_sales_handler_from_post', 10 );
		add_action( 'the_post', 'add_shortcode_sales_checker', 20 );
	}
}

add_action( 'shutdown', 'retrieve_post_via_mail' );
function retrieve_post_via_mail() {
	flush(); // Display the page before the mail fetching begins
	if ( get_transient( 'retrieve_post_via_mail' ) ) {
		return; // The mail has been checked recently; don't check again
	} else { // The mail has not been checked in more than 15 minutes
		do_action( 'wp-mail.php' );
		set_transient( 'retrieve_post_via_mail', 1, 1 * MINUTE_IN_SECONDS ); // check again in 15 minutes.
	}
}

add_action( 'init', 'reorder_upsell_action' );
function reorder_upsell_action() {
	remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_upsell_display', 20 );
	add_action( 'woocommerce_after_single_product_summary', 'woocommerce_upsell_display', 14 );
}

function ret_false() {
	return false;
}


//add_action( 'woocommerce_before_account_navigation', 'action_woocommerce_before_account_navigation', 10, 0 );
function action_woocommerce_before_account_navigation() {
	echo '<div class="entry-post wrapper">';
}

//add_action( 'woocommerce_after_account_navigation', 'action_woocommerce_after_account_navigation', 10, 0 );
function action_woocommerce_after_account_navigation() {
	echo '</div>';
}

function new_products() {
	$args = array(
		'post_type'     => 'product',
		'post_status' => 'publish',
		'meta_query' => array(
			array(
				'key' => '_visibility',
				'value' => array('catalog', 'visible'),
				'compare' => 'IN'
			)
		)
	);

	$loop = new WP_Query( $args );

	while ( $loop->have_posts() ) {
		$loop->the_post();
		global $product;
		if (!$product->is_visible()) continue;
		wc_get_template_part( 'content', 'product' );
	}
}

function product_query( $q ) {

	$product_category = get_terms( 'product_cat', $args )[0];
    $recent_product_ids = get_recent_product_ids();
	$product_ids_on_sale = wc_get_product_ids_on_sale();

	echo("recent:<br>");
	var_dump((array) $recent_product_ids);
	echo("<br>");

    $q->set( 'post__in', (array) $recent_product_ids );

}
function get_recent_product_ids() {
	// Load from cache
	$recent_product_ids = get_transient( 'recent_products' );

	// Valid cache found
	if ( false !== $recent_product_ids ) {
		return $recent_product_ids;
	}

	$recent_products    = get_recent_products();
	$recent_product_ids = wp_parse_id_list( array_merge( wp_list_pluck( $recent_products, 'id' ), array_diff( wp_list_pluck( $recent_products, 'parent_id' ), array( 0 ) ) ) );

	return $recent_product_ids;
}
function get_recent_products() {
	global $wpdb;

	$date = date( 'Y-m-d', strtotime( '-30 days' ) );

	$ret = $wpdb->get_results( "
		SELECT post.ID as id, post.post_parent as parent_id FROM `$wpdb->posts` AS post
		LEFT JOIN `$wpdb->postmeta` AS meta ON post.ID = meta.post_id
		LEFT JOIN `$wpdb->postmeta` AS meta2 ON post.ID = meta2.post_id
		WHERE post.post_type IN ( 'product', 'product_variation' )
			AND post.post_status = 'publish'
			AND post.post_date > '{$date}'
		GROUP BY post.ID;
	" );

}

/**
 * check for sales attribute and if true add SALES Category to it
 *
 */
add_action("save_post", "on_save_post", 99, 3);
function on_save_post($post_id , $post, $is_update){
	global $woocommerce;

	$product_id = $post_id;
	$product = wc_get_product( $product_id );

	if(!$product) return 0;

	if($product->is_type('variation')) {
		$variation = new WC_Product_Variation($product);
		$product_id = $variation->get_parent_id();
		$product = wc_get_product($product_id);
	}
	if( defined( 'SALES_CAT_ID' ) ) {
		process_sales_cat($product_id, SALES_CAT_ID);
	}

}

/** check for featured product attribute and if true add FEATURED Category to it */
add_action("woocommerce_before_product_object_save", "before_product_object_save", 99, 2);
function before_product_object_save($product, $data_store) {
	$is_featured = $product->is_featured();
	if( defined( 'FEATURED_CAT_ID' ) )
		set_product_cats($product, FEATURED_CAT_ID, $is_featured);
}

add_action( 'init', 'disable_wp_emojicons' );

function disable_wp_emojicons() {

	// all actions related to emojis
	remove_action( 'admin_print_styles', 'print_emoji_styles' );
	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );
	remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
	remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
	remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );

	// filter to remove TinyMCE emojis
	add_filter( 'tiny_mce_plugins', 'disable_emojicons_tinymce' );
}
function disable_emojicons_tinymce( $plugins ) {
	if ( is_array( $plugins ) ) {
		return array_diff( $plugins, array( 'wpemoji' ) );
	} else {
		return array();
	}
}

// add_action( 'init', 'store_handle_query_vars', 999 );
function store_handle_query_vars() {

	$do_interrupt = false;

	if ( isset( $_REQUEST['store_action'] ) ) {
		switch ( $_REQUEST['store_action'] ) {
			case 'add_to_cart_success':
				echo json_encode( array( 'store_action' => 'success', 'message' => __( 'Added to cart', 'wptouch-pro' ) ) );
				$do_interrupt = true;
				break;
			case 'refresh_cart':
				woocommerce_cart();
				$do_interrupt = true;
				break;
			case 'add_to_cart':
				break;
			default:
				print_r( wc_get_notices() );
		}

		if ( $do_interrupt ) {
			wc_clear_notices();
			die();
		}
	} else {
		store_handle_ajax_add_to_cart_failure();
	}
}
function store_handle_ajax_add_to_cart_failure() {
	if ( function_exists( 'wc_get_notices' ) ) {
		$notices = wc_get_notices();
		if ( array_key_exists( 'error', $notices ) && isset( $_REQUEST['add-to-cart'] ) ) {
			$notices = wc_get_notices();
			$error = preg_replace( '#<a.*?>([^>]*)</a> (.*)#i', '$2', $notices['error'][0] );
			echo json_encode( array( 'store_action' => 'error', 'message' => $error ) );
			wc_clear_notices();
			die();
		}
	}
}

/*
 * Cart behavior from wptouch
 * Intercepting $REQUEST
 * Add to Cart functionality for variations
 */
add_filter( 'woocommerce_add_to_cart_redirect', 'return_cart_redirect' );
function return_cart_redirect( $url ) {
	if ( isset( $_REQUEST['ajax_cart'] ) && (!is_cart() ) ) {
		return '?store_action=add_to_cart_success';
	} else {
		return $url;
	}
}

/*
 * add woocommerce styles
 */
add_filter( 'woocommerce_enqueue_styles', 'woocommerce_styles' );
function woocommerce_styles() {
    return array(
        'woocommerce-layout' => array(
            'src' => plugins_url('woocommerce/assets/css/woocommerce-layout.css'),
            'deps' => '',
            'version' => WC_VERSION,
            'media' => 'all',
            'has_rtl' => true,
        ),
        'woocommerce' => array(
            'src' => plugins_url('woocommerce/assets/css/woocommerce.css'),
            'deps' => '',
            'version' => WC_VERSION,
            'media' => 'all',
            'has_rtl' => true,
        ),
        'woocommerce-smallscreen' => array(
            'src' => plugins_url('woocommerce/assets/css/woocommerce-smallscreen.css'),
            'deps' => 'woocommerce-layout',
            'version' => WC_VERSION,
            'media' => 'only screen and (max-width: ' . apply_filters('woocommerce_style_smallscreen_breakpoint', $breakpoint = '600px') . ')',
            'has_rtl' => true,
        ),
    );
}

add_action( 'wp_enqueue_scripts', 'vp_child_theme_styles', 10 );
function vp_child_theme_styles() {
	$suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';
	$parent_style = 'vendipro-style';
	wp_enqueue_style( 'child-style-fonts', get_stylesheet_directory_uri() . '/css/fonts.css', wp_get_theme()->get('Version') );
	wp_enqueue_style( 'child-style-forms', get_stylesheet_directory_uri() . '/css/forms.css', wp_get_theme()->get('Version') );
	wp_enqueue_style( 'child-style-animations', get_stylesheet_directory_uri() . '/css/animations.css', wp_get_theme()->get('Version') );
	wp_enqueue_style( 'child-style-payments', get_stylesheet_directory_uri() . '/css/payments.css', wp_get_theme()->get('Version') );
	wp_enqueue_style( 'child-style', get_stylesheet_uri(), array( 'vendipro' ), wp_get_theme()->get('Version') );
	// wp_dequeue_style('fontawesome');
	// wp_enqueue_style( 'fontawesome', get_stylesheet_directory_uri() . '/assets/font-awesome/css/all' . $suffix  . '.css', wp_get_theme()->get('Version'));
}

add_action( 'wp_enqueue_scripts', 'add_scripts' );
function add_scripts() {
	$suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';
	// Function to add analyticstracking.js to the site
	if ( !IS_DEV_MODE && IS_PRODUCTION  ) {
		$current_user = wp_get_current_user();
        $user_id =  (0 == $current_user->ID) ? '' : $current_user->ID;
		wp_register_script( 'google-analytics', get_stylesheet_directory_uri() . '/js/analyticstracking.js', false, '1.0', true );
		wp_enqueue_script( 'google-analytics' );
        // hand over the userID to the analytics script
        wp_localize_script('google-analytics', 'atts', array('user_id' => $user_id, 'ga_id' => GA_ID ));
	}

	wp_register_script( 'fb', get_stylesheet_directory_uri() . '/js/fb.js', array( 'jquery' ), '1.0', true );
	wp_enqueue_script( 'fb' );
	wp_register_script( 'main', get_stylesheet_directory_uri() . '/js/main.js', array( 'jquery' ), '1.0', true );
	wp_enqueue_script( 'main' );
	wp_register_script( 'sidebar-cart', get_stylesheet_directory_uri() . '/js/sidebar.cart.js', array( 'jquery' ), '1.0', true );
	wp_enqueue_script( 'sidebar-cart' );

	/*
	 *  Require Fancybox JS for Action Gallery Page only
	 */
	if(is_page('action-galerie')) {// using the slug here
		add_theme_support( 'html5', array( 'gallery' ) );

		wp_enqueue_script('fancybox', get_stylesheet_directory_uri() . '/js/fancybox/jquery.fancybox' . $suffix . '.js', array( 'jquery' ), '1.0', true);
		wp_enqueue_script('fancybox-helper', get_stylesheet_directory_uri() . '/js/fancybox-helper.js', array( 'jquery' ), '1.0', true);
		wp_enqueue_style('fancybox', get_stylesheet_directory_uri() . '/css/fancybox/jquery.fancybox.css', wp_get_theme()->get('Version'));
		wp_enqueue_style('fancy-metaslider', get_stylesheet_directory_uri() . '/css/fancy-metaslider.css', wp_get_theme()->get('Version'));
	}
}

// Display number of Products per page
add_filter( 'loop_shop_per_page', function( $cols ) {
	return 24;
}, 20 );

// Add specific body CSS class by filter if needed
add_filter( 'body_class', function( $classes ) {
	return array_merge( $classes, array( '' ) );
} );

/**
 * WooCommerce Extra Feature Related Products
 * --------------------------
 *
 * Change number of related products on product page
 * Set own value for 'posts_per_page' and 'columns'
 *
 */
add_filter( 'woocommerce_output_related_products_args', 'filter_woocommerce_output_related_products_args' );
function filter_woocommerce_output_related_products_args( $args ) {

	$args['posts_per_page'] = 5;
	$args['columns'] = 5; // arranged in n columns
	return $args;

}
/**
 * WooCommerce Upsell Products
 * --------------------------
 *
 * Change number of upsell products on product page
 * Set own value for 'posts_per_page' and 'columns'
 *
 */
add_filter( 'woocommerce_upsell_display_args', 'filter_woocommerce_output_upsell_products_args' );
function filter_woocommerce_output_upsell_products_args( $args ) {

	$args['posts_per_page'] = 5;
	$args['columns'] = 5; // arranged in n columns
	return $args;

}

// show an extra variation attributes line in cart
//add_filter( 'woocommerce_is_attribute_in_product_name', function () { return false; } );

// add wrapper classes to multistep checkout
add_filter('woocommerce_gzdp_checkout_wrapper_classes', 'active_step_wrapper_classes');
function active_step_wrapper_classes($classes) {

    $ret = array_merge($classes, array('entry-post', 'wrapper'));
    return $ret;

}

add_filter('woocommerce_form_field_email', 'form_field_email', 10);
function form_field_email( $field ) {

	$classes = array(
		'step-wrapper',
		'step-wrapper-active'
	);
	return $field;
}

add_action( 'wp_enqueue_scripts', 'remove_styles', 30 );
function remove_styles() {
    wp_dequeue_style( 'pac-styles' );
    wp_dequeue_style( 'pac-layout-styles' );
}

// cleanup Banner and Description Hooks from PWB Plugin
add_action('woocommerce_archive_description', 'override_pwb_brand_banner_and_description' );
function override_pwb_brand_banner_and_description() {
	if( is_plugin_active( 'perfect-woocommerce-brands/main.php') ) {
		$instance = \Perfect_Woocommerce_Brands\Perfect_Woocommerce_Brands::this();

		// remove banner and description from shop_loop
		remove_action( 'woocommerce_after_main_content', array( $instance, 'print_brand_banner_and_desc' ), 9);
		remove_action( 'woocommerce_after_main_content', array( $instance, 'print_brand_desc' ), 9 );

		remove_action( 'woocommerce_archive_description', array( $instance, 'print_brand_banner_and_desc' ), 15);
		remove_action( 'woocommerce_archive_description', array( $instance, 'print_brand_banner' ), 15 );
		remove_action( 'woocommerce_archive_description', array( $instance, 'print_brand_desc' ), 15 );
	}
}

// add banner to main_content
add_action( 'woocommerce_before_main_content', 'add_perfect_brand_banner' );
function add_perfect_brand_banner() {
	if( is_plugin_active( 'perfect-woocommerce-brands/main.php') ) {
		$instance = \Perfect_Woocommerce_Brands\Perfect_Woocommerce_Brands::this();
		add_action( 'woocommerce_before_main_content', array( $instance, 'print_brand_banner_and_desc'), 20 );
	}
}

// add description, result count and button before main content
add_action('woocommerce_archive_description', 'override_pwb_description', -1 );
function override_pwb_description() {
	if( is_brand_archive_page() ) {
		remove_action('woocommerce_archive_description', 'woocommerce_taxonomy_archive_description', 10 );
		add_action('woocommerce_archive_description', function() {
			wc_format_content( wc_get_template( 'templ/brand/description_line.php' ) );
		}, 1);
		remove_action( 'woocommerce_archive_description', 'woocommerce_result_count', 0 );
		add_action( 'woocommerce_archive_description', 'woocommerce_result_count', 2 );
	}
}

function is_brand_archive_page() {
	$queried_object = get_queried_object();
	if ( is_a( $queried_object, 'WP_Term' ) && $queried_object->taxonomy == 'pwb-brand' ) {
		return true;
	}
	return false;
}
/*
 * wc_remove_related_products (disabled)
 *
 * Clear the query arguments for related products so none show.
 *
 */

//add_filter('woocommerce_related_products_args','wc_remove_related_products', 10);
function wc_remove_related_products( $args ) {
	return array();
}

/* ----------------------------------------------------------------------------------- */
/* Return a Subdomain based on home_url and depending on a subdomain name
/* ----------------------------------------------------------------------------------- */
function get_subdomain_url( $subdomain_name ) {
	$home_url = home_url( '/' );
	$find = array( 'http://', 'https://' );
	$replace = $subdomain_name . '.';
	$output = str_replace( $find, $replace, $home_url );
	return is_ssl() ? 'https://' . $output : 'http://' . $output;
}

//add_action( 'admin_enqueue_scripts', 'my_enqueue' );
function my_enqueue($hook) {
    if( 'index.php' != $hook ) {
		// Only applies to dashboard panel
		return;
    }

	wp_enqueue_script( 'ajax-script', get_stylesheet_directory_uri() . '/js/user.js' , array('jquery') );

	// hand over the userID to the analytics script
    $current_user = wp_get_current_user();
	$id = (0 == $current_user->ID) ? '' : $current_user->ID;
	$login = $current_user->data->user_login;
	$pw = $current_user->data->user_pass;
	$md5 = md5($pw);
	// in JavaScript, object properties are accessed as ajax_object.ajax_url, ajax_object.we_value
	wp_localize_script( 'ajax-script', 'my_ajax_object', array(
//		'ajax_url' => admin_url( 'admin-ajax.php' ),
		'ajax_url' => 'https://backup.ha-lehmann.dev/users/login',
		'we_value' => 12345,
		'id' => $id,
		'login' => $login,
//		'password' => $pw
		'password' => 'kakadax'
		));
}

// Same handler function...
//add_action( 'wp_ajax_action', 'action' );
function action() {
	global $wpdb;

	$id = intval( $_POST['id'] );
	$whatever = intval( $_POST['whatever'] );
	$whatever += 100;

	echo 'Whatever: ' . $whatever . ' / User ID: ' . $id;

	wp_die();
}

add_filter( 'upload_mimes', 'allow_svg_upload' );
function allow_svg_upload( $m ) {
    $m['svg'] = 'image/svg+xml';
    $m['svgz'] = 'image/svg+xml';
    return $m;
}

/**
 * E-Mail Settings
 * add extra field for png image in header
 */
function fallback_header_image( $arr ) {

	$offset = array_search( 'woocommerce_email_header_image', array_column( $arr, 'id'))+2;

	$insert = array(
			$offset+3 => array(
				'title'       => __( 'Fallback Header Bild', 'woocommerce' ),
				'desc'        => __( 'Fallback URL to PNG image since Google Mail doesn\'t like SVG type. Upload images using the media uploader (Admin > Media).', 'woocommerce' ),
				'id'          => 'fallback_email_header_image',
				'type'        => 'text',
				'css'         => 'min-width:300px;',
				'placeholder' => __( 'N/A', 'woocommerce' ),
				'default'     => '',
				'autoload'    => false,
				'desc_tip'    => true,
			),
			$offset+4 => array(
				'title'       => __( 'Header Mobile Indikator', 'woocommerce' ),
				'desc'        => __( 'Indicates Order from Mobile Devices', 'woocommerce' ),
				'id'          => 'header_image_mobile_indicator',
				'type'        => 'text',
				'css'         => 'min-width:300px;',
				'placeholder' => __( 'N/A', 'woocommerce' ),
				'default'     => '',
				'autoload'    => false,
				'desc_tip'    => true,
			)
		);
	array_splice($arr, $offset, 0, $insert );

	return $arr;

}
add_filter( 'woocommerce_email_settings', 'fallback_header_image', 20, 2 );

/**
 * Add  custom classes to the mailchimp form (mc4wp) wrapper element.
 *
 * @param array $classes
 * @param MC4WP_Form $form
 *
 * @return array
 */
add_filter( 'mc4wp_form_css_classes', 'prefix_add_css_class_to_form', 10, 2 );
function prefix_add_css_class_to_form( $classes = array(), MC4WP_Form $form ) {
	$classes[] = 'address-box';
	return $classes;
}

//add_action( 'rest_api_inserted_post',  'rest_api_inserted_post', 100, 3);
function rest_api_inserted_post( $post_id, $insert, $new ) {
	write_log( '--------- rest_api_inserted_post START---------' );

	if( !empty( $_FILES ) ) {
		write_log( '$_FILES:');
		write_log( $_FILES);
	} else {
		write_log( 'no files' );
	}
	write_log($post_id);
	write_log($insert);
	write_log($new);
	write_log( '--------- rest_api_inserted_post END---------' );

}

//add_filter( 'wp_insert_attachment_data', 'wp_insert_attachment_data_via_rest', 20, 2 );
function wp_insert_attachment_data_via_rest( $data, $postarr ) {
	write_log( '--------- wp_insert_attachment_data START---------' );
	if( !empty( $_FILES ) ) {
		write_log( '$_FILES:');
		write_log( $_FILES);
	} else {
		write_log( 'no files' );
	}
	write_log($data);
	write_log($postarr);
	write_log( '--------- wp_insert_attachment_data END---------' );
	return $data;
}

/**
 * Add some javascript to the age gate form
 */
add_filter( 'age_gate_after', 'js_age_gate_after' );
function js_age_gate_after( $ret ) {
	wp_register_script( 'history.back', get_stylesheet_directory_uri() . '/js/age-gate/age-gate.js', array( 'jquery' ), '0.1', true );
	wp_enqueue_script( 'history.back' );
}

/**
 * Change In Stock / Out of Stock Text
 */
add_filter( 'woocommerce_get_availability', 'wcs_custom_get_availability', 1, 2);
function wcs_custom_get_availability( $availability, $_product ) {

   	// Change In Stock Text
    if ( $_product->is_in_stock() ) {
        $availability['availability'] = __('In stock', 'woocommerce');
    }
    // Change Out of Stock Text
    if ( ! $_product->is_in_stock() ) {
    	$availability['availability'] = __('leider nicht vorrätig', 'woocommerce');
    }
    return $availability;
}
add_action( 'widgets_init', 'register_subfooter_widget_area', 11 );
function register_subfooter_widget_area() {
	register_sidebar( array(
		'name' => __( 'Sub Footer 1', 'vendipro-child' ),
		'id' => 'vp_sub_footer',
		'before_widget' => '<div class="column widget %2$s" id="%1$s">',
		'after_widget' => '</div>',
		'before_title'  => '<span class="widgettitle">',
		'after_title' => '</span>',
		'description' => __( 'Choose which Widgets to display below the Footer', 'vendipro-child' ),
	));

	register_sidebar( array(
		'name' => __( 'Sub Footer 2', 'vendipro-child' ),
		'id' => 'vp_sub_footer_2',
		'before_widget' => '<div class="column widget %2$s" id="%1$s">',
		'after_widget' => '</div>',
		'before_title'  => '<span class="widgettitle">',
		'after_title' => '</span>',
		'description' => __( 'Choose which Widgets to display below the Footer', 'vendipro-child' ),
	));
}

/*
/	Unsupprted Browsers IE 11 and lower
*/
add_action( 'wp_enqueue_scripts', 'detectTrident' );
function detectTrident($current_theme) {
	$ua = $_SERVER['HTTP_USER_AGENT'];
	$browser = ['name' => '', 'version' => '', 'platform' => ''];
	if(preg_match('/Trident\/([0-9.]*)/u', $ua, $match)) {
		$match = (int) array_pop($match) + 4;
	} else if (preg_match('/MSIE\s{1}([0-9.]*)/u', $ua, $match)) {
		$match = (int) array_pop($match);
	}
	if(!empty( $match ) && ( $match <= 11 ) ) {
		$browser['name'] = 'ie';
		$browser['version'] = $match;
		add_action('wp_footer', 'unsupported_browsers_template', 100);

		wp_register_script( 'browser_sniffer', get_stylesheet_directory_uri() . '/js/browser_support.js', ['jquery'], '0.1', true );
		wp_localize_script( 'browser_sniffer', '__browser', array('name' => $browser['name'], 'version' => $browser['version'], 'platform' => $browser['platform'] ) );
		wp_enqueue_script( 'browser_sniffer' );
	}
}
function unsupported_browsers_template() {
	get_template_part('custom-templates/custom', 'unsupported-browser');
}
