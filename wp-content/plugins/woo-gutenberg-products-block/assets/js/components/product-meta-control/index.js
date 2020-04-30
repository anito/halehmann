/**
 * External dependencies
 */
import { __, _n, sprintf } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { find } from 'lodash';
import PropTypes from 'prop-types';
import { SearchListControl, SearchListItem } from '@woocommerce/components';
import { SelectControl } from '@wordpress/components';
import { withMetas } from '@woocommerce/block-hocs';
import ErrorMessage from '@woocommerce/block-components/error-placeholder/error-message.js';

/**
 * Internal dependencies
 */
import './style.scss';

const ProductMetaControl = ( {
	metas,
	error,
	isLoading,
	onChange,
	onOperatorChange,
	operator,
	selected,
	isSingle,
} ) => {
	const renderItem = ( args ) => {
		const { item, search, depth = 0 } = args;
		const classes = [ 'woocommerce-product-categories__item' ];
		if ( search.length ) {
			classes.push( 'is-searching' );
		}
		if ( depth === 0 && item.parent !== 0 ) {
			classes.push( 'is-skip-level' );
		}
		item.breadcrumbs = [];

		return (
			<SearchListItem
				className={ classes.join( ' ' ) }
				{ ...args }
				aria-label={ item.name }
			/>
		);
	};

	const messages = {
		clear: __( 'Clear all product metas', 'woo-gutenberg-products-block' ),
		list: __( 'Product Metas', 'woo-gutenberg-products-block' ),
		noItems: __(
			"Your store doesn't have any product metas.",
			'woo-gutenberg-products-block'
		),
		search: __(
			'Search for product metas',
			'woo-gutenberg-products-block'
		),
		selected: ( n ) =>
			sprintf(
				_n(
					'%d meta selected',
					'%d metas selected',
					n,
					'woo-gutenberg-products-block'
				),
				n
			),
		updated: __(
			'Meta search results updated.',
			'woo-gutenberg-products-block'
		),
	};

	if ( error ) {
		return <ErrorMessage error={ error } />;
	}

	return (
		<Fragment>
			<SearchListControl
				className="woocommerce-product-metas"
				list={ metas }
				isLoading={ isLoading }
				selected={ selected
					.map( ( id ) => find( metas, { id } ) )
					.filter( Boolean ) }
				onChange={ onChange }
				renderItem={ renderItem }
				messages={ messages }
				isHierarchical
				isSingle={ isSingle }
			/>
			{ !! onOperatorChange && (
				<div
					className={
						selected.length < 2 ? 'screen-reader-text' : ''
					}
				>
					<SelectControl
						className="woocommerce-product-categories__operator"
						label={ __(
							'Display products matching',
							'woo-gutenberg-products-block'
						) }
						help={ __(
							'Pick at least two metas to use this setting.',
							'woo-gutenberg-products-block'
						) }
						value={ operator }
						onChange={ onOperatorChange }
						options={ [
							{
								label: __(
									'Any selected metas',
									'woo-gutenberg-products-block'
								),
								value: 'any',
							},
							{
								label: __(
									'All selected metas',
									'woo-gutenberg-products-block'
								),
								value: 'all',
							},
						] }
					/>
				</div>
			) }
		</Fragment>
	);
};

ProductMetaControl.propTypes = {
	/**
	 * Callback to update the selected product metas.
	 */
	onChange: PropTypes.func.isRequired,
	/**
	 * Callback to update the meta operator. If not passed in, setting is not used.
	 */
	onOperatorChange: PropTypes.func,
	/**
	 * Setting for whether products should match all or any selected metas.
	 */
	operator: PropTypes.oneOf( [ 'all', 'any' ] ),
	/**
	 * The list of currently selected meta IDs.
	 */
	selected: PropTypes.array.isRequired,
	/**
	 * Allow only a single selection. Defaults to false.
	 */
	isSingle: PropTypes.bool,
};

ProductMetaControl.defaultProps = {
	operator: 'any',
	isSingle: false,
};

export default withMetas( ProductMetaControl );
