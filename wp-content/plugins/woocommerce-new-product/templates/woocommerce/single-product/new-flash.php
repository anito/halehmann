<?php
/**
 * Product loop sale flash
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     1.6.4
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $post, $product;

$badge_style = flatsome_option('bubble_style');

// Fix depricated
if($badge_style == 'style1') $badge_style = 'circle';
if($badge_style == 'style2') $badge_style = 'square';
if($badge_style == 'style3') $badge_style = 'frame';

?>
<div class="badge-container is-larger new-product absolute left top z-1">
<?php echo apply_filters( 'woocommerce_sale_flash', '<div class="callout badge badge-'.$badge_style.'"><div class="badge-inner secondary new-product"><span class="for-adult">' .  $text . '</span></div></div>', $post, $product ); ?>

<?php echo apply_filters( 'flatsome_product_labels', '', $post, $product, $badge_style); ?>
</div>