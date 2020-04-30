/**
 * External dependencies
 */
import { getCategories, setCategories } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { woo as Icon } from '@woocommerce/icons';

/**
 * Internal dependencies
 */
import { IconHal } from './components/icons';
import '../css/editor.scss';
import '../css/style.scss';
import './filters/block-list-block';
import './filters/get-block-attributes';

setCategories( [
	...getCategories().filter( ( { slug } ) => slug !== 'woocommerce' ),
	// Add a WooCommerce block category
	{
		slug: 'woocommerce',
		title: __( 'WooCommerce', 'woo-gutenberg-products-block' ),
		icon: <Icon />,
	},
] );
setCategories( [
	...getCategories().filter( ( { slug } ) => slug !== 'halehmann' ),
	// Add a Lehmann GmbH block category
	{
		slug: 'halehmann',
		title: __( 'Lehmann GmbH', 'woo-gutenberg-products-block' ),
		icon: <IconHal />,
	},
] );
