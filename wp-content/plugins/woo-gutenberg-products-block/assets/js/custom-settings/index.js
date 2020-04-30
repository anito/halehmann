/**
 * External dependencies
 */
import { getSetting, setSetting } from '@woocommerce/settings';

const assetsUrl = getSetting( 'wcBlocksAssetUrl', '' );
setSetting( 'min_height', 150 );
setSetting( 'default_height', 222 );
setSetting( 'image_placeholder', `${assetsUrl}img/placeholder.svg` );

export const MIN_HEIGHT = getSetting( 'min_height' );
export const MAX_HEIGHT = getSetting( 'max_height' );
export const DEFAULT_HEIGHT = getSetting( 'default_height' );
export const DEFAULT_IMG_PLACEHOLDER_SRC = getSetting( 'image_placeholder' );

