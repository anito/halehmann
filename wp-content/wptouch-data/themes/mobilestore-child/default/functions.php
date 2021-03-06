<?php
// require_once( __DIR__ . '/includes/cat_process_helper.php');
require_once( __DIR__ . '/includes/product_cat_handler.php');
require_once( __DIR__ . '/includes/sender_email.php');

add_theme_support( 'html5', array( 'gallery' ) );

/**
 * WooCommerce Extra Feature Related Products
 * --------------------------
 *
 * Change number of related products on product page
 * Set your own value for 'posts_per_page'
 *
 */
add_filter( 'woocommerce_output_related_products_args', 'woo_related_products_limit' );
function woo_related_products_limit() {
	global $product;

	$args['posts_per_page'] = 4;
	return $args;
}

/*
 * wc_remove_related_products
 *
 * Clear the query arguments for related products so none show.
 */

// wc_remove_related_products
// Löschen des Abfrage-Arguments, um keine ähnlichen Produkte anzuzeigen.

function wc_remove_related_products( $args ) {
	return array();
}

// Function to add custom javascript
add_action('wp_print_scripts', 'add_scripts');
function add_scripts() {
	$suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';
	wp_register_script( 'readmore', get_stylesheet_directory_uri() . '/js/readmore-js/readmore' . $suffix . '.js' , array('jquery'), '1.0', true );
	wp_enqueue_script( 'readmore');
	if( !IS_DEV_MODE ) {
		$current_user = wp_get_current_user();
        $user_id =  (0 == $current_user->ID) ? '' : $current_user->ID;
		// Register analyticstracking.php file (Google Analytics)
		wp_register_script('google-analytics', get_stylesheet_directory_uri() . '/js/analyticstracking.js', false, '1.0', true);
		wp_enqueue_script('google-analytics');
        // hand over the userID to the analytics script
        wp_localize_script('google-analytics', 'atts', array('user_id' => $user_id, 'ga_id' => GA_ID ));
	}

	/*
	*  Fonts & Payment Styles
	*/
	wp_enqueue_style( 'child-style-fonts', get_stylesheet_directory_uri() . '/css/fonts.css' );
	wp_enqueue_style( 'child-style-payments', get_stylesheet_directory_uri() . '/css/payments.css' );
	wp_enqueue_style( 'font-awesome', get_stylesheet_directory_uri() . '/assets/font-awesome/font-awesome' . (IS_PRODUCTION ? '.min' : '') . '.css' );

	/*
	*  Require Fancybox JS for Action Gallery Page only
	*/
	if(is_page('action-galerie')) {// using the slug here
		wp_enqueue_script('fancybox', get_stylesheet_directory_uri() . '/js/fancybox/jquery.fancybox' . (IS_PRODUCTION ? '.min' : '') . '.js', array( 'jquery' ), '1.0', true);
		wp_enqueue_script('fancybox-helper', get_stylesheet_directory_uri() . '/js/fancybox-helper.js', array( 'jquery' ), '1.0', true);
		wp_enqueue_style('fancybox', get_stylesheet_directory_uri() . '/css/fancybox/jquery.fancybox.css');
		wp_enqueue_style('fancy-metaslider', get_stylesheet_directory_uri() . '/css/fancy-metaslider.css');
	}

	$translation_array = array(
		'login_toggle_start' => __( 'Login now', 'wptouch-pro' ),
		'login_toggle_close' => __( 'Close', 'wptouch-pro' ),
		'company_name_link' => __( 'Add Company Name', 'wptouch-pro' ),
		'order_notes_link' => __( 'Add Order Notes', 'wptouch-pro' ),
		'<a href="%s">Edit your password and account details</a>.' => __( '<a href="%s">Passwort und Konto-Daten bearbeiten</a>.', 'wptouch-pro' ),
		'cvc' => __( 'CVC', 'wptouch-pro' )
	);

	wp_dequeue_script( 'mobilestore-js' );
	wp_register_script(
		'my-mobilestore-js', get_stylesheet_directory_uri() . '/js/my_mobilestore.js', array( 'jquery', 'mobilestore-libraries-js' ),
		MOBILESTORE_THEME_VERSION,
		true
	);

	wp_localize_script( 'my-mobilestore-js', 'translated_strings', $translation_array );
	wp_enqueue_script( 'my-mobilestore-js' );
	wp_register_script( 'main', get_stylesheet_directory_uri() . '/js/main.js', false, '1.0', true );
	wp_enqueue_script( 'main' );
}

/**
 * Manipulates the sale badge to show percentage instead of just SALE
 *
 * @param string $html current sale badge html
 * @param object $post current post object
 * @param object $product current product object
 * @return string sale badge html containing percentage
 */
add_filter( 'woocommerce_sale_flash', 'set_sale_flash', 1, 3 );
function set_sale_flash( $html, $post, $product ) {
	$html = '';
	if ( $product->get_type() != 'variable' ) {
		$regular = $product->get_regular_price();
		if ( $regular > 0 ) {
			$sale = $product->get_sale_price();
			$perc = round( 100 - ( (100 / $regular) * $sale ) );
			$html = '<span class="onsale">' . esc_html__( 'Sale!', 'woocommerce' ) . "<i class='sale-badge badge'> -"  . $perc . '%</i></span>';
		}
	} else {
		$regular_min = $product->get_variation_regular_price( 'min' );
		$regular_max = $product->get_variation_regular_price( 'max' );
		$sale_min = $product->get_variation_sale_price( 'min' );
		$sale_max = $product->get_variation_sale_price( 'max' );
		if ( $regular_min > 0 && $regular_max > 0 ) {
			$perc_min = round( 100 - ( (100 / $regular_min) * $sale_min ) );
			$perc_max = round( 100 - ( (100 / $regular_max) * $sale_max ) );
			$html = '<span class="onsale">' . esc_html__( 'Sale!', 'woocommerce' ) . "<i class='sale-badge badge'> -"  . ( ( $perc_min != $perc_max ) ? ( $perc_min . '-' . $perc_max ) : $perc_max ) . '%</i></span>';
		}
	}
	return $html;
}

// override parent functions at a higher prio and include is_product_taxonomy
function wptouch_mobilestore_output_content_wrapper_end_override() {
	echo '</div>';
	$settings = mobilestore_get_settings();
	if ( $settings->mobilestore_product_pagination == 'ajax' && ( is_shop() || is_product_taxonomy() || is_product_category() || is_product_tag()  ) ) {
		global $wp_query;
		if ( get_next_posts_page_link( $wp_query->max_num_pages ) ) {
			echo '<a class="load-more-products-link no-ajax" href="#" rel="' . get_next_posts_page_link($wp_query->max_num_pages) . '">';
			_e( 'view more products', 'wptouch-pro' );
			echo '</a>';
		}
	}
}
function wptouch_maybe_stop_responsive_images_override() {
	if ( is_shop() || is_product_category() || is_product_tag() || is_search() || is_page() || is_product() || is_product_taxonomy() ) {
		add_filter( 'wp_get_attachment_image_attributes', 'wptouch_mobilestore_no_responsive_thumbnails' );
		remove_filter( 'post_thumbnail_html', 'wptouch_media_inject_attachment_id', 10 );
		remove_filter( 'post_thumbnail_html', 'wp_make_content_images_responsive', 20 );
	}
}
function mobilestore_products_per_page_override( $query ) {
	$settings = mobilestore_get_settings();
	set_query_var( 'posts_per_page', $settings->mobilestore_products_per_page );
}

add_action( 'init', 'ha_l_init_hooks' );
function ha_l_init_hooks() {
	// remove conntent structure from parent theme templates
    remove_action( 'woocommerce_after_main_content', 'wptouch_mobilestore_output_content_wrapper_end', 10 );
	add_action( 'woocommerce_after_main_content', 'wptouch_mobilestore_output_content_wrapper_end_override', 10 );

    remove_action( 'wp', 'wptouch_maybe_stop_responsive_images' );
	add_action( 'wp', 'wptouch_maybe_stop_responsive_images_override' );

	remove_action( 'pre_get_posts', 'mobilestore_products_per_page', 30 );
	add_action( 'pre_get_posts', 'mobilestore_products_per_page_override', 30 );


}

add_action( 'wp_enqueue_scripts', 'remove_styles', 30 );
function remove_styles() {
	wp_dequeue_style( 'nb-styles' );
    wp_dequeue_style( 'pac-styles' );
	wp_dequeue_style( 'pac-layout-styles' );

	check_post_meta_dependencies();
}
function check_post_meta_dependencies() {
	global $post;
	if( $shortcode = get_post_meta($post->ID, 'shortcode' ) ) {
		include __DIR__ . "/includes/{shortcode}-shortcode.php";
	}
}
function archive_term_image() {

	if ( is_product_category() ) {
		global $wp_query;

		$cat = $wp_query->get_queried_object();
		$thumbnail_id = get_woocommerce_term_meta( $cat->term_id, 'thumbnail_id', true );

	} elseif ( function_exists( 'may_be_filtered_post' )  && may_be_filtered_post() ) {

		$thumbnail_id = get_woocommerce_term_meta( get_main_category_id(), 'thumbnail_id', true );

	}
	if ( !empty( $thumbnail_id ) ) {

		$thumbnail_post = get_post( $thumbnail_id );
		$image = wp_get_attachment_url( $thumbnail_id );
		if ( $image ) { ?>
			<div class="cat-thumb">
				<img src="<?php echo $image ?>" alt="" />
			</div>
		<?php
		}
	}

}

// we dont need the the cat-thumb overlay
// remove_action() must be called inside a function and cannot be called directly in plugin or theme.
add_action( 'woocommerce_before_main_content', 'remove_new_archive_term_image_action' );
function remove_new_archive_term_image_action() {
	remove_action( 'woocommerce_before_main_content', 'new_archive_term_image', 20 );
	add_action( 'woocommerce_before_main_content', 'archive_term_image', 20 );
}

add_action('woocommerce_archive_description', 'get_brands_template', 1);
function get_brands_template() {
	wc_get_template( 'templ/badge/brand.php' );
}

// cleanup Banner and Description Hooks from PWB Plugin
add_action('woocommerce_archive_description', 'override_pwb_brand_banner_and_description' );
function override_pwb_brand_banner_and_description() {
	$instance = \Perfect_Woocommerce_Brands\Perfect_Woocommerce_Brands::this();

	// remove banner and description from shop_loop
	remove_action( 'woocommerce_after_main_content', array( $instance, 'print_brand_banner_and_desc' ), 9);
	remove_action( 'woocommerce_after_main_content', array( $instance, 'print_brand_desc' ), 9 );

	remove_action( 'woocommerce_archive_description', array( $instance, 'print_brand_banner_and_desc' ), 15);
	remove_action( 'woocommerce_archive_description', array( $instance, 'print_brand_banner' ), 15 );
	remove_action( 'woocommerce_archive_description', array( $instance, 'print_brand_desc' ), 15 );

}

// add banner to main_content
add_action( 'woocommerce_before_main_content', 'add_perfect_brand_banner' );
function add_perfect_brand_banner() {
	$instance = \Perfect_Woocommerce_Brands\Perfect_Woocommerce_Brands::this();
	add_action( 'woocommerce_before_main_content', array( $instance, 'print_brand_banner_and_desc'), 20 );
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
//		add_action( 'woocommerce_archive_description', 'woocommerce_result_count', 2 );
	}
}

function is_brand_archive_page() {
	$queried_object = get_queried_object();
	if ( is_a( $queried_object, 'WP_Term' ) && $queried_object->taxonomy == 'pwb-brand' ) {
		return true;
	}
	return false;
}

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