<?php
/**
 * Template used for displaying page content in page.php
 *
 * @author Vendidero
 * @version 1.0.0
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="action-gallery entry-content <?php echo is_front_page() ? "entry-post wrapper" : ""; ?>">
		<h2 class="entry-title"><?php the_title(); ?></h2>
		<?php the_content(); ?>
		<?php // echo do_shortcode('[gallery size="medium" link="none" ids="13406,13392,13409,13408,13407,13405,13404,13403,13402,13401,13400,13399,13398,13397,13396,13395,13394,13393"]'); ?>
		<?php wp_link_pages( array( 'before' => '<div class="page-link"><span>' . __( 'Pages:', 'vendipro' ) . '</span>', 'after' => '</div>' ) ); ?>
	</div><!-- .entry-content -->
	<footer class="entry-meta">
		<?php edit_post_link( __( 'Edit', 'vendipro' ), '<span class="edit-link">', '</span>' ); ?>
	</footer><!-- .entry-meta -->
</article><!-- #post-<?php the_ID(); ?> -->