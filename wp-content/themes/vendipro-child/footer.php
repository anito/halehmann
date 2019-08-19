<?php
/**
 * Template for displaying Footer
 *
 * @author Vendidero
 * @version 1.0.0
 */
?>
<?php
/**
 * edit the gzd footer infos here: /wp-content/plugins/woocommerce-germanized/templates/footer/vat-info.php
 *
 */
?>
</div>
<footer id="bottom">
	<div class="container">
		<div class="widgets" id="widgets-footer">
			<div class="grid grid-<?php echo vendipro()->widgets->get_widget_count( 'vp_footer' ); ?>">
				<?php dynamic_sidebar( 'vp_footer' ); ?>
			</div>
		</div>
		<div class="subfooter-container">
			<div class="widgettitle">Partner</div>
			<div class="subfooter items-<?php echo vendipro()->widgets->get_widget_count( 'vp_sub_footer' ); ?>">
					<?php dynamic_sidebar( 'vp_sub_footer' ); ?>
			</div>
		</div>
		<div class="footer-msg"><?php do_action( 'woocommerce_gzd_footer_msg' ) ; ?></div>
	</div>
</footer>
<div id="menu-right"><?php get_template_part('custom-templates/custom', 'cart'); ?></div>
<?php wp_footer(); ?>
<div class="_pp_overlay" style="opacity: 0.8; height: 1738px; width: 1233px; display: none;"></div>
</body>
</html>