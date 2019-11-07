<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
/**
 * Main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @author Vendidero
 * @version 1.0.0
 */

get_header(); ?>

	<div id="primary" class="<?php echo ( ( vendipro()->widgets->get_widget_count( 'vp_blog' ) > 0 && vp_has_sidebar( 'vp_blog' ) ) ? 'has-sidebar' : '' );?>">
	
		<div id="content" role="main">

		
			
		<?php if ( have_posts() ) : ?>
			
			<?php $default_category = get_option('default_category'); ?>
			
			<?php while ( have_posts() ) : the_post(); ?>
				
				<?php if( in_category($default_category) ) {
					
					get_template_part( 'content', get_post_format() );
					
				} ?>

			<?php endwhile; ?>

			<?php vp_content_nav( 'nav-below' ); ?>

		<?php else : ?>

			<article id="post-0" class="post no-results not-found">
				<header class="entry-header">
					<h1 class="entry-title"><?php _e( 'Nothing Found', 'vendipro' ); ?></h1>
				</header><!-- .entry-header -->

				<div class="entry-content">
					<p><?php _e( 'Apologies, but no results were found for the requested archive. Perhaps searching will help find a related post.', 'vendipro' ); ?></p>
					<?php get_search_form(); ?>
				</div><!-- .entry-content -->
			</article><!-- #post-0 -->

		<?php endif; ?>

		</div><!-- #content -->

	</div><!-- #primary -->

<?php vp_get_sidebar( 'blog' ); ?>

<?php get_footer(); ?>