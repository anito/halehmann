<?php
/**
 * Template to show product content within widgets
 *
 * @author 		Vendidero
 * @version     3.3.0
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

global $product; 
?>
<li>
	<?php do_action( 'woocommerce_widget_product_item_start', $args ); ?>
	<a href="<?php echo esc_url( get_permalink( is_callable( array( $product, 'get_id' ) ) ? $product->get_id() : $product->id ) ); ?>" title="<?php echo esc_attr( $product->get_title() ); ?>">
		<span class="left">
			<span class="img"><?php echo $product->get_image(); ?></span>
		</span>
		<span class="right">
			<span class="title"><?php echo $product->get_title(); ?></span>
			<span class="rating"><?php if ( ! empty( $show_rating ) ) echo function_exists( 'wc_get_rating_html' ) ? wc_get_rating_html( $product->get_average_rating() ) : $product->get_rating_html(); ?></span>
			<span class="price"><?php echo $product->get_price_html(); ?></span>
		</span>
	</a>
	<?php do_action( 'woocommerce_widget_product_item_end', $args ); ?>
</li>