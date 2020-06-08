<?php
require_once( __DIR__ . '/includes/product_cat_handler.php');
require_once( __DIR__ . '/includes/sender_email.php');
// require_once( __DIR__ . '/includes/create_new_product_tax.php');

add_theme_support( 'editor-styles');
add_editor_style( 'style-editor.css' );

add_action( 'admin_init', 'flatsome_add_editor_styles' );

function theme_setup_theme_supported_features() {
    add_theme_support( 'editor-color-palette', array(
        array(
            'name' => __( 'lehmann red', 'flatsome-child' ),
            'slug' => 'lehmann-red',
            'color' => '#de0303',
        ),
        array(
            'name' => __( 'light grayish magenta', 'flatsome-child' ),
            'slug' => 'light-gray',
            'color' => '#d0a5db',
        ),
        array(
            'name' => __( 'very light gray', 'flatsome-child' ),
            'slug' => 'very-light-gray',
            'color' => '#eee',
        ),
        array(
            'name' => __( 'very dark gray', 'flatsome-child' ),
            'slug' => 'very-dark-gray',
            'color' => '#444',
        ),
        array(
            'name' => __( 'light white', 'flatsome-child' ),
            'slug' => 'light-white',
            'color' => '#fbf8f9',
        ),
    ) );
}
add_action( 'after_setup_theme', 'theme_setup_theme_supported_features' );

add_action( 'woocommerce_before_shop_loop_item', 'halehmann_show_product_loop_adult_flash', 20 );
if ( ! function_exists( 'halehmann_show_product_loop_adult_flash' ) ) {

	/**
	 * Output the product adult flash.
	 */
	function halehmann_show_product_loop_adult_flash() {
		wc_get_template( 'loop/adult-flash.php' );
	}
}
add_action( 'flatsome_adult_flash','halehmann_show_product_adult_flash', 10 );
if ( ! function_exists( 'halehmann_show_product_adult_flash' ) ) {

	/**
	 * Output the product adult flash.
	 */
	function halehmann_show_product_adult_flash() {
		wc_get_template( 'single-product/adult-flash.php' );
	}
}
if ( ! function_exists( 'is_adult_product' ) ) {

	/**
	 * Output the product adult flash.
	 */
	function is_adult_product() {
        global $post;

        $terms = get_the_terms( get_the_ID(), 'product_tag' );
        foreach( $terms as $term ) {
            if( $term->slug === "ab-18" ) {
                return true;
            }
        }
		return false;
	}
}

/**
 * check for sales attribute and if true add SALES Category to it
 *
 */
add_action("save_post", "check_product_for_sale", 99, 3);
function check_product_for_sale($post_id , $post, $is_update){
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
add_action("woocommerce_before_product_object_save", "check_product_cat_before_save", 99, 2);
function check_product_cat_before_save($product, $data_store) {
    if( defined( 'FEATURED_CAT_ID' ) ) {
        $is_featured = $product->is_featured();
		set_product_cat($product, FEATURED_CAT_ID, $is_featured);
    }
	// if( defined( 'NEW_CAT_ID' ) )
	// 	set_product_cat($product, NEW_CAT_ID, true);
}

add_action( 'wp_enqueue_scripts', 'add_scripts' );
function add_scripts() {
	$suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';
	// Function to add analyticstracking.js to the site
	if ( !IS_DEV_MODE ) {
		$current_user = wp_get_current_user();
        $user_id =  (0 == $current_user->ID) ? '' : $current_user->ID;
		wp_register_script( 'google-analytics', get_stylesheet_directory_uri() . '/js/analyticstracking.js', false, '1.0', true );
		wp_enqueue_script( 'google-analytics' );
        // hand over the userID to the analytics script
        wp_localize_script('google-analytics', 'atts', array('user_id' => $user_id, 'ga_id' => GA_ID ));
	}

    wp_register_script( 'readmore', get_stylesheet_directory_uri() . '/js/readmore-js/readmore' . $suffix . '.js' , array('jquery'), '1.0', true );
	wp_enqueue_script( 'readmore');
	wp_register_script( 'fb', get_stylesheet_directory_uri() . '/js/fb.js', array( 'jquery' ), '1.0', true );
    wp_enqueue_script( 'fb' );
    wp_register_script( 'main', get_stylesheet_directory_uri() . '/js/main.js', array( 'jquery' ), '1.0', true );
	wp_enqueue_script( 'main' );


	/*
	 *  Require Fancybox JS for Action Gallery Page only
	 */
	if(is_page('action-galerie')) {// using the slug here
		add_theme_support( 'html5', array( 'gallery' ) );

		wp_enqueue_script('fancybox', get_stylesheet_directory_uri() . '/js/fancybox/jquery.fancybox' . $suffix . '.js', array( 'jquery' ), '1.0', true);
		wp_enqueue_script('fancybox-helper', get_stylesheet_directory_uri() . '/js/fancybox-helper.js', array( 'jquery' ), '1.0', true);
		wp_enqueue_style('fancybox', get_stylesheet_directory_uri() . '/css/fancybox/jquery.fancybox.css', wp_get_theme()->get('Version'));
	}
}

/**
 * Add some javascript to the age gate form
 */
add_filter( 'age_gate_after', 'js_age_gate_after' );
function js_age_gate_after( $ret ) {
	wp_register_script( 'history.back', get_stylesheet_directory_uri() . '/js/age-gate/age-gate.js', array( 'jquery' ), '0.1', true );
	wp_enqueue_script( 'history.back' );
}