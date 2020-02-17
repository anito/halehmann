<?php
add_shortcode( 'my_sales','shortcode_check_sales_handler' );
function shortcode_check_sales_handler($atts) {
	include __DIR__ . "/includes/sales_checker.php";
	
	$default_atts =['cat_id' => ''];
	
	$atts = shortcode_atts($default_atts, $atts );
	$sales_id = $atts['cat_id'];
	
	$del = delete_from_sales($sales_id);
	$add = add_to_sales($sales_id);
	
	ob_start();
	sales_checker_start($sales_id, $del, $add);
	
}