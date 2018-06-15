<?php
/**
 * Single Product Price, including microdata for SEO
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     1.6.4
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
global $woocommerce;

?>
<div class="button-container">
		

    <a href="<?php echo wc_get_checkout_url() ?>" class="button white button-checkout" title="<?php _e( 'Proceed to checkout', 'woocommerce' ); ?>">
			<?php _e( 'Proceed to checkout', 'woocommerce' ); ?>
		</a>


    <a href="<?php echo wc_get_cart_url() ?>" class="button button-go-to-cart" title="<?php _e( 'Go to Cart', 'vendipro' ); ?>">
			<?php _e( 'Go to Cart', 'vendipro' ); ?>
		</a>


</div>
<div class="message-wrapper"></div>
<div class="bottom">
	<div class="cart-collaterals-wrapper">
		<div class="cart-collaterals sidebar-cart-subtotals <?php  if ( WC()->cart->is_empty() ) { echo "empty"; } ?>">
			<?php

			if ( ! WC()->cart->is_empty() ) : ?>
			<span><?php echo _e( 'Subtotal', 'woocommerce' ); ?>:</span><span class="amount"><?php wc_cart_totals_subtotal_html(); ?></span>
			<?php else : ?>
			<span><?php echo _e( 'Your cart is currently empty.', 'woocommerce' ); ?></span>
			<?php endif; ?>

		</div>
		<?php
		if ( ! WC()->cart->is_empty() ) : ?>
		<div class="cart-collaterals sidebar-cart-totals">


			<span><?php echo _e( 'Total', 'woocommerce' ); ?>:</span><span class="amount"><?php wc_cart_totals_order_total_html(); ?></span>
			<?php else : ?>
			<span><?php echo _e( 'Your cart is currently empty.', 'woocommerce' ); ?></span>

		</div>
		<?php endif; ?>
	</div>
</div>
