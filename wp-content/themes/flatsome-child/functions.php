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