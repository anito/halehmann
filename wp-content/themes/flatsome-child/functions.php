<?php
require_once( __DIR__ . '/includes/product_cat_handler.php');
require_once( __DIR__ . '/includes/sender_email.php');
// require_once( __DIR__ . '/includes/create_new_product_tax.php');

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

	wp_register_script( 'fb', get_stylesheet_directory_uri() . '/js/fb.js', array( 'jquery' ), '1.0', true );
    wp_enqueue_script( 'fb' );


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