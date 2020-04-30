/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import { createHigherOrderComponent } from '@wordpress/compose';
import { getMetaProduct } from '@woocommerce/block-components/utils-meta';

/**
 * Internal dependencies
 */
import { formatError } from '../base/utils/errors.js';

/**
 * HOC that queries a product for a component.
 *
 * @param {Function} OriginalComponent Component being wrapped.
 */
const withProductMetas = createHigherOrderComponent( ( OriginalComponent ) => {
	return class WrappedComponent extends Component {
		constructor() {
			super( ...arguments );
			this.state = {
				error: null,
				loading: false,
				product: null,
			};
			this.loadProduct = this.loadProduct.bind( this );
		}

		componentDidMount() {
			this.loadProduct();
		}

		componentDidUpdate( prevProps ) {
			const prevMetas = JSON.stringify( prevProps.attributes.metas );
			const metas = JSON.stringify( this.props.attributes.metas );
			if ( prevMetas !== metas ) {
				this.loadProduct();
			}
		}

		loadProduct() {
			const { metas } = this.props.attributes;

			if ( ! metas.length ) {
				this.setState( { product: null, loading: false, error: null } );
				return;
			}

			this.setState( { loading: true } );

			getMetaProduct( metas[ 0 ] )
				.then( ( products ) => {
					const product = products.length ? products[ 0 ] : null;
					this.setState( { product, loading: false, error: null } );
				} )
				.catch( async ( e ) => {
					const error = await formatError( e );
					this.setState( { product: null, loading: false, error } );
				} );
		}

		render() {
			const { error, loading, product } = this.state;

			return (
				<OriginalComponent
					{ ...this.props }
					error={ error }
					isLoading={ loading }
					product={ product }
				/>
			);
		}
	};
}, 'withProductMetas' );

export default withProductMetas;
