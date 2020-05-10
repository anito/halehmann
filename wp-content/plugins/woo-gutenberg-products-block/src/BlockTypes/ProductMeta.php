<?php
/**
 * Featured products block.
 *
 * @package WooCommerce\Blocks
 */

namespace Automattic\WooCommerce\Blocks\BlockTypes;

defined( 'ABSPATH' ) || exit;

/**
 * FeaturedProduct class.
 */
class ProductMeta extends AbstractDynamicBlock {
	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'product-meta';

	/**
	 * Default attribute values, should match what's set in JS `registerBlockType`.
	 *
	 * @var array
	 */
	protected $defaults = array(
		'align'              => 'none',
		'contentAlign'       => 'center',
		'dimRatio'           => 50,
		'focalPoint'         => false,
		'height'             => false,
		'mediaId'            => 0,
		'mediaSrc'           => '',
		'iconId'             => 0,
		'showDesc'           => false,
		'showPrice'          => true,
		'showIcon'           => true,
		'hasInclineFooter'   => false,
		'hasButtonBorder'    => false,
	);

	/**
	 * Set args specific to this block
	 *
	 * @param array $query_args Query args.
	 */
	protected function set_block_query_args( &$query_args ) {
		$query_args['post__in'] = array_merge( array( 0 ), wc_get_product_ids_on_sale() );
	}
	/**
	 * Get block attributes.
	 *
	 * @return array
	 */
	protected function get_attributes() {
		return array_merge(
			parent::get_attributes(),
			array(
				'className' => $this->get_schema_string(),
				'iconSrc'   => $this->get_schema_string( plugins_url( 'assets', dirname( dirname( __FILE__ ) ) ) . '/img/placeholder.svg' ),

			)
		);
	}

	/**
	 * Render the Product Meta block.
	 *
	 * @param array  $attributes Block attributes. Default empty array.
	 * @param string $content    Block content. Default empty string.
	 * @return string Rendered block type output.
	 */
	public function render( $attributes = array(), $content = '' ) {

		/**
		 * check for Spine App Pugin and its settings
		 */
		if( ! defined( 'SPINEAPP_PLUGIN_DIR' ) || ! class_exists( 'Spine_js_woo' ) )
			return;

		require_once \SPINEAPP_PLUGIN_DIR . 'classes/class-woo-custom-fields.php';

		/**
		 * check for Custom Product Meta definitions
		 */
		$id = ! empty( $attributes['metas'] ) ? (int) $attributes['metas'][0] : null;
		if ( ! isset( $id ) ) {
			return '';
		}
		$instance = new \Spine_js_woo();
		$ids      = $instance->get_products_from_meta( $id );
		$id       = ! empty( $ids ) ? $ids[0] : 0;
		$product  = wc_get_product( $id );

		if ( empty( $product ) ) {
			return '';
		}

		$header = $instance->get_product_meta( $id, '_hal_header', $attributes['slug'] );
		$footer = $instance->get_product_meta( $id, '_hal_footer', $attributes['slug'] );

		/**
		 * Remove extra fields from Germanized
		 */
		remove_filter( 'woocommerce_get_price_html', 'woocommerce_gzd_template_product_blocks', 50, 2 );

		$attributes = wp_parse_args( $attributes, $this->defaults );
		if ( ! $attributes['height'] ) {
			$attributes['height'] = wc_get_theme_support( 'featured_block::default_height', 350 );
		}

		$icon = sprintf(
			'<div class="wc-block-product-meta__icon-wrapper">
				<div class="wc-block-product-meta__icon">
					<div class="icon-text">
						<div>%1$s</div>
					</div>
					<div class="icon-img">
						<img src="%2$s" alt="icon" />
					</div>
				</div>
			</div>',
			wp_kses_post( $header ),
			esc_url( $attributes['iconSrc'] )
		);

		$title = sprintf(
			'<h2 class="wc-block-product-meta__title">%s</h2>',
			wp_kses_post( $product->get_title() )
		);

		if ( $product->is_type( 'variation' ) ) {
			$title .= sprintf(
				'<h3 class="wc-block-product-meta__variation">%s</h3>',
				wc_get_formatted_variation( $product, true, true, false )
			);
		}

		$desc_str = sprintf(
			'<div class="wc-block-product-meta__description">%s</div>',
			apply_filters( 'woocommerce_short_description', $product->get_short_description() ? $product->get_short_description() : wc_trim_string( $product->get_description(), 400 ) )
		);

		$price_str = sprintf(
			'<div class="wc-block-product-meta__price">%s</div>',
			$product->get_price_html()
		);

		$note_str = sprintf(
			'<div class="wc-block-product-meta__footer"><div>%s</div></div>',
			'*** '.wp_kses_post( $footer ).' ***'
		);

		$output = '<div class="block-wrapper">';

		if ( $attributes['showIcon'] ) {
			$output .= $icon;
		}

		$output  .= sprintf( '<div class="%1$s" style="%2$s">', $this->get_classes( $attributes ), $this->get_styles( $attributes, $product ) );
		$output .= '<div class="wc-block-product-meta__wrapper">';
		$output .= $title;

		if ( $attributes['showDesc'] ) {
			$output .= $desc_str;
		}
		if ( $attributes['showPrice'] ) {
			$output .= $price_str;
		}

		$content = preg_replace( '/(href\=\")([^"]*)(")/i', '${1}'.$product->get_permalink().'${3}', $content ) ;
		$output .= '<div class="wc-block-product-meta__link">' . $content . '</div>';
		$output .= '</div>';
		$output .= $note_str;
		$output .= '</div>';
		$output .= '</div>';

		return $output;
	}

	/**
	 * Get the styles for the wrapper element (background image, color).
	 *
	 * @param array       $attributes Block attributes. Default empty array.
	 * @param \WC_Product $product Product object.
	 * @return string
	 */
	public function get_styles( $attributes, $product ) {
		$style      = '';
		$image_size = 'large';
		if ( 'none' !== $attributes['align'] || $attributes['height'] > 800 ) {
			$image_size = 'full';
		}

		if ( $attributes['mediaId'] ) {
			$image = wp_get_attachment_image_url( $attributes['mediaId'], $image_size );
		} else {
			$image = $this->get_image( $product, $image_size );
		}

		if ( ! empty( $image ) ) {
			$style .= sprintf( 'background-image:url(%s);', esc_url( $image ) );
		}

		if ( isset( $attributes['customOverlayColor'] ) ) {
			$style .= sprintf( 'background-color:%s;', esc_attr( $attributes['customOverlayColor'] ) );
		}

		if ( isset( $attributes['height'] ) ) {
			$style .= sprintf( 'min-height:%dpx;', intval( $attributes['height'] ) );
		}

		if ( is_array( $attributes['focalPoint'] ) && 2 === count( $attributes['focalPoint'] ) ) {
			$style .= sprintf(
				'background-position: %s%% %s%%',
				$attributes['focalPoint']['x'] * 100,
				$attributes['focalPoint']['y'] * 100
			);
		}

		return $style;
	}

	/**
	 * Get class names for the block container.
	 *
	 * @param array $attributes Block attributes. Default empty array.
	 * @return string
	 */
	public function get_classes( $attributes ) {
		$classes = array( 'wc-block-' . $this->block_name );

		if ( isset( $attributes['align'] ) ) {
			$classes[] = "align{$attributes['align']}";
		}

		if ( $attributes['hasInclineFooter'] ) {
			$classes[] = 'has-incline-footer';
		}

		if ( $attributes['hasButtonBorder'] ) {
			$classes[] = 'has-button-border';
		}

		if ( isset( $attributes['dimRatio'] ) && ( 0 !== $attributes['dimRatio'] ) ) {
			$classes[] = 'has-background-dim';

			if ( 50 !== $attributes['dimRatio'] ) {
				$classes[] = 'has-background-dim-' . 10 * round( $attributes['dimRatio'] / 10 );
			}
		}

		if ( isset( $attributes['contentAlign'] ) && 'center' !== $attributes['contentAlign'] ) {
			$classes[] = "has-{$attributes['contentAlign']}-content";
		}

		if ( isset( $attributes['overlayColor'] ) ) {
			$classes[] = "has-{$attributes['overlayColor']}-background-color";
		}

		if ( isset( $attributes['className'] ) ) {
			$classes[] = $attributes['className'];
		}

		return implode( ' ', $classes );
	}

	/**
	 * Returns the main product image URL.
	 *
	 * @param \WC_Product $product Product object.
	 * @param string      $size    Image size, defaults to 'full'.
	 * @return string
	 */
	public function get_image( $product, $size = 'full' ) {
		$image = '';
		if ( $product->get_image_id() ) {
			$image = wp_get_attachment_image_url( $product->get_image_id(), $size );
		} elseif ( $product->get_parent_id() ) {
			$parent_product = wc_get_product( $product->get_parent_id() );
			if ( $parent_product ) {
				$image = wp_get_attachment_image_url( $parent_product->get_image_id(), $size );
			}
		}

		return $image;
	}
}
