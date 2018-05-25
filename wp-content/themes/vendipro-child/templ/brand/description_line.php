<?php
/**
 * Result Count
 *
 * Shows text: Showing x - x of x results.
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/loop/result-count.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see 	    https://docs.woocommerce.com/document/template-structure/
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     3.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
?>
<?php if (\Perfect_Woocommerce_Brands\Perfect_Woocommerce_Brands::is_brand_archive_page()) : ?>
	<?php
		$description = wc_format_content( term_description() );
		echo '<div class="term-description first-description-line"><button  class="button overview"><a href="' . get_permalink( BRANDS_ID ) . '">' . _('zur Marken-Übersicht') . '</a></button>' . $description . '</div>';
	?>
<?php endif ?>
