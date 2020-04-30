/**
 * External dependencies
 */
import { addQueryArgs } from '@wordpress/url';
import apiFetch from '@wordpress/api-fetch';
import { ENDPOINTS } from '@woocommerce/block-settings';

export const getMetaProduct = ( meta ) => {
	return apiFetch( {
		path: `${ ENDPOINTS.metaProducts }/${ meta }`,
	} );
};
export const getMetas = ( queryArgs ) => {
	return apiFetch( {
		path: addQueryArgs( `${ ENDPOINTS.metas }`, {
			...queryArgs,
		} ),
	} );
};
