/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/editor';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { DEFAULT_HEIGHT, DEFAULT_IMG_PLACEHOLDER_SRC } from '../../custom-settings';

/**
 * Internal dependencies
 */
import './style.scss';
import './editor.scss';
import { example } from './example';
import Block from './block';

/**
 * Register and run the "Special Product" block.
 */
registerBlockType( 'woocommerce/product-meta', {
	title: __( 'Special Product', 'woo-gutenberg-products-block' ),
	icon: {
		src: 'buddicons-groups',
		foreground: '#e30006',
	},
	category: 'halehmann',
	keywords: [ __( 'WooCommerce', 'woo-gutenberg-products-block' ) ],
	description: __(
		'Zeige Special Actionen an.',
		'woo-gutenberg-products-block'
	),
	supports: {
		align: [ 'wide', 'full' ],
		html: false,
	},
	example,
	attributes: {
		hasInclineFooter: {
			type: 'boolean',
			default: false,
		},

		hasButtonBorder: {
			type: 'boolean',
			default: false,
		},

		permalink: {
			type: 'string',
		},

		tagName: {
			type: 'string',
			default: 'div',
		},

		heading: {
			type: 'string',
			default: 'Lehmann Aktion',
		},

		note: {
			type: 'string',
			default: 'Wir lieben Shopping',
		},
		/**
		 * Alignment of content inside block.
		 */
		contentAlign: {
			type: 'string',
			default: 'center',
		},

		/**
		 * Percentage opacity of overlay.
		 */
		dimRatio: {
			type: 'number',
			default: 70,
		},

		/**
		 * Toggle for edit mode in the block preview.
		 */
		editMode: {
			type: 'boolean',
			default: true,
		},

		/**
		 * Focus point for the background image
		 */
		focalPoint: {
			type: 'object',
		},

		/**
		 * A fixed height for the block.
		 */
		height: {
			type: 'number',
			default: DEFAULT_HEIGHT,
		},

		/**
		 * ID for a custom image, overriding the product's featured image.
		 */
		mediaId: {
			type: 'number',
			default: 0,
		},

		/**
		 * URL for a custom image, overriding the product's featured image.
		 */
		mediaSrc: {
			type: 'string',
			default: '',
		},

		/**
		 * The overlay color, from the color list.
		 */
		overlayColor: {
			type: 'string',
			default: '#000000',
		},

		/**
		 * The overlay color, if a custom color value.
		 */
		customOverlayColor: {
			type: 'string',
		},

		/**
		 * Text for the product link.
		 */
		linkText: {
			type: 'string',
			default: __( 'Shop now', 'woo-gutenberg-products-block' ),
		},

		/**
		 * The product ID to display.
		 */
		productId: {
			type: 'number',
		},

		/**
		 * The Meta Slug to display.
		 */
		slug: {
			type: 'string',
		},

		/**
		 * Show the product description.
		 */
		showDesc: {
			type: 'boolean',
			default: false,
		},

		/**
		 * Show the product price.
		 */
		showPrice: {
			type: 'boolean',
			default: true,
		},

		/**
		 * Product preview.
		 */
		previewProduct: {
			type: 'object',
			default: null,
		},

		/**
		 * Show the product description.
		 */
		showIcon: {
			type: 'boolean',
			default: true,
		},

		/**
		 * URL for a custom icon image
		 */
		iconSrc: {
			type: 'string',
			default: DEFAULT_IMG_PLACEHOLDER_SRC,
		},

		/**
		 * ID for a custom icon
		 */
		iconId: {
			type: 'number',
			default: 0,
		},

		metas: {
			type: 'array',
			default: [],
		},

		/**
		 * Product category operator, used to restrict to products in all or any selected categories.
		 */
		catOperator: {
			type: 'string',
			default: 'any',
		},
	},

	/**
	 * Renders and manages the block.
	 *
	 * @param {Object} props Props to pass to block.
	 */
	edit( props ) {
		return <Block { ...props } />;
	},

	/**
	 * Block content is rendered in PHP, not via save function.
	 */
	save() {
		return <InnerBlocks.Content />;
	},
} );
