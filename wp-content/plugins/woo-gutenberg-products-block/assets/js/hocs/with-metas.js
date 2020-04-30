/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import { createHigherOrderComponent } from '@wordpress/compose';
import { getMetas } from '@woocommerce/block-components/utils-meta';

/**
 * Internal dependencies
 */
import { formatError } from '../base/utils/errors.js';

/**
 * HOC that queries metas for a component.
 *
 * @param {Function} OriginalComponent Component being wrapped.
 */
const withMetas = createHigherOrderComponent( ( OriginalComponent ) => {
	return class WrappedComponent extends Component {
		constructor() {
			super( ...arguments );
			this.state = {
				error: null,
				loading: false,
				metas: [],
				product: null,
			};
			this.loadMetas = this.loadMetas.bind( this );
		}

		componentDidMount() {
			this.loadMetas();
		}

		loadMetas() {
			this.setState( { loading: true } );

			getMetas( {} )
				.then( ( metas ) => {
					this.setState( {
						metas: metas.map(
							( val, i ) => ( val = { id: i, ...val } )
						),
						loading: false,
						error: null,
					} );
				} )
				.catch( async ( e ) => {
					const error = await formatError( e );

					this.setState( {
						metas: null,
						loading: false,
						error,
					} );
				} );
		}

		render() {
			const { error, loading, metas } = this.state;

			return (
				<OriginalComponent
					{ ...this.props }
					error={ error }
					isLoading={ loading }
					metas={ metas }
				/>
			);
		}
	};
}, 'withMetas' );

export default withMetas;
