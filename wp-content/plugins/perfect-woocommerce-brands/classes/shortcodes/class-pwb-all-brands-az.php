<?php
namespace Perfect_Woocommerce_Brands\Shortcodes;
use WP_Query;

defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

class PWB_All_Brands_Az_Shortcode{

  public static function all_brands_az_shortcode( $atts ) {

    // $atts = shortcode_atts( array(), $atts, 'pwb-az-listing' );
    $atts = shortcode_atts(array(
      'per_page' => "10",
      'image_size' => "thumbnail",
      'hide_empty' => false,
      'order_by' => 'name',
      'order' => 'ASC',
      'title_position' => 'before',
  ), $atts, 'pwb-all-brands-az');

  $hide_empty = ($atts['hide_empty'] != 'true') ? false : true;


    ob_start();

    $brands         = \Perfect_Woocommerce_Brands\Perfect_Woocommerce_Brands::get_brands( true, 'name', 'ASC' );
    $grouped_brands = array();

    $letter = null;
    foreach( $brands as $brand ){
      if( $letter != $brand->name[0] ) $letter = $brand->name[0];
      $letter = strtolower( self::replace_specials_characters( $letter ) );
      $grouped_brands[$letter][] = $brand;
    }

    //navigation
    if( !empty( $grouped_brands ) ):
      ?>
      <div class="pwb-all-brands">

        <div class="pwb-az-listing-header">
          <ul class="pwb-clearfix animate-scroll">
            <?php
            foreach( $grouped_brands as $letter => $brand_group ):
              ?>
              <li><a href="#pwb-az-listing-<?php echo $letter;?>"><?php echo $letter;?></a></li>
              <?php
            endforeach;
            ?>
          </ul>
        </div>

        <div class="pwb-az-listing-content">
          <?php

          foreach( $grouped_brands as $letter => $brand_group ):
            ?>
            <div id="pwb-az-listing-<?php echo $letter;?>" class="pwb-az-listing-row pwb-clearfix">
              <p class="pwb-az-listing-title"><?php echo $letter;?></p>
              <div class="pwb-brands-cols-outer">
                <?php
                foreach( $brand_group as $brand ):
                  $has_products = self::has_products( $brand->term_id );
                  if( !empty( $has_products ) ):
                    
                        $brand_id = $brand->term_id;
                        $brand_name = $brand->name;
                        $brand_link = get_term_link($brand_id);

                        $attachment_id = get_term_meta($brand_id, 'pwb_brand_image', 1);
                        $attachment_html = $brand_name;
                        if ($attachment_id != '') {
                            $attachment_html = wp_get_attachment_image($attachment_id, $atts['image_size']);
                        }
                        $title_position = $atts['title_position'];


                      ?>
                      <div class="pwb-brands-col3">

                        <?php if( $title_position != 'none' && $title_position != 'after' ): ?>
                          <p>
                            <a href="<?php echo $brand_link;?>"><?php echo $brand_name;?></a>
                            <small><?php echo $brand->count;?></small>
                          </p>
                        <?php endif; ?>

                        <div>
                          <a href="<?php echo $brand_link;?>" title="<?php echo $brand_name;?>"><?php echo $attachment_html;?></a>
                        </div>

                        <?php if( $title_position != 'none' && $title_position == 'after' ): ?>
                          <p>
                            <a href="<?php echo $brand_link;?>"><?php echo $brand_name;?></a>
                            <small>(<?php echo $brand->count;?>)</small>
                          </p>
                        <?php endif; ?>

                      </div>
                    <?php
                  endif;
                endforeach;
                ?>
              </div>
            </div>
            <?php
          endforeach;

          ?>
        </div>

      </div>
      <?php

    endif;

    return ob_get_clean();

  }

  protected static function replace_specials_characters($s){
		$s = preg_replace("/á|à|â|ã|ª/","a",$s);
		$s = preg_replace("/Á|À|Â|Ã/","A",$s);
		$s = preg_replace("/é|è|ê/","e",$s);
		$s = preg_replace("/É|È|Ê/","E",$s);
		$s = preg_replace("/í|ì|î/","i",$s);
		$s = preg_replace("/Í|Ì|Î/","I",$s);
		$s = preg_replace("/ó|ò|ô|õ|º/","o",$s);
		$s = preg_replace("/Ó|Ò|Ô|Õ/","O",$s);
		$s = preg_replace("/ú|ù|û/","u",$s);
		$s = preg_replace("/Ú|Ù|Û/","U",$s);

		$s = preg_replace('/[^a-zA-Z0-9_.-]/', '', $s);
		return $s;
	}

  private static function has_products( $brand_id ){

    $args = array(
      'posts_per_page' => -1,
      'post_type' => 'product',
      'tax_query' => array(
        array(
          'taxonomy' => 'pwb-brand',
          'field'    => 'term_id',
          'terms'    => array( $brand_id )
        )
      ),
      'fields' => 'ids'
    );

    if( get_option('woocommerce_hide_out_of_stock_items') === 'yes' ){
      $args['meta_query'] = array(
        array(
          'key'     => '_stock_status',
          'value'   => 'outofstock',
          'compare' => 'NOT IN'
        )
      );
    }

    $wp_query = new WP_Query($args);
    wp_reset_postdata();
    return $wp_query->posts;

  }

}
