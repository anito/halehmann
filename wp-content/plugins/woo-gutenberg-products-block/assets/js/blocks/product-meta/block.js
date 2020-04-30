/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	AlignmentToolbar,
	BlockControls,
	InnerBlocks,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	PanelColorSettings,
	withColors,
	RichText,
} from '@wordpress/editor';
import {
	Button,
	FocalPointPicker,
	IconButton,
	PanelBody,
	Placeholder,
	RangeControl,
	ResizableBox,
	Spinner,
	ToggleControl,
	Toolbar,
	withSpokenMessages,
} from '@wordpress/components';
import classnames from 'classnames';
import { Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import ErrorPlaceholder from '@woocommerce/block-components/error-placeholder';
import { withProductMetas } from '@woocommerce/block-hocs';
import ProductMetaControl from '@woocommerce/block-components/product-meta-control';
import { PlainText } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { MIN_HEIGHT, MAX_HEIGHT } from '../../custom-settings';
import { dimRatioToClass, getBackgroundImageStyles } from './utils';
import { getImageSrcFromProduct } from '../../utils/products';

/**
 * Component to handle edit mode of "Special Product".
 */
const ProductMeta = ( {
	attributes,
	debouncedSpeak,
	error,
	getProduct,
	isLoading,
	isSelected,
	overlayColor,
	product,
	setAttributes,
	setOverlayColor,
} ) => {
	const renderApiError = () => (
		<ErrorPlaceholder
			className="wc-block-product-meta-error"
			error={ error }
			isLoading={ isLoading }
			onRetry={ getProduct }
		/>
	);

	const renderEditMode = () => {
		const onDone = () => {
			setAttributes( { editMode: false } );
			debouncedSpeak(
				__(
					'Showing Specials Product block preview.',
					'woo-gutenberg-products-block'
				)
			);
		};

		return (
			<Fragment>
				{ getBlockControls() }
				<Placeholder
					icon="buddicons-groups"
					label={ __(
						'Special Product',
						'woo-gutenberg-products-block'
					) }
					className="wc-block-product-meta"
				>
					{ __(
						'Visually highlight a Special Product',
						'woo-gutenberg-products-block'
					) }
					<div className="wc-block-product-meta__selection">
						<Button isDefault onClick={ onDone }>
							{ __( 'Done', 'woo-gutenberg-products-block' ) }
						</Button>
					</div>
				</Placeholder>
			</Fragment>
		);
	};

	const getBlockControls = () => {
		const { contentAlign, editMode } = attributes;
		const iconId = attributes.iconId;

		return (
			<BlockControls>
				<AlignmentToolbar
					value={ contentAlign }
					onChange={ ( nextAlign ) => {
						setAttributes( { contentAlign: nextAlign } );
					} }
				/>
				<MediaUploadCheck>
					<Toolbar>
						<MediaUpload
							onSelect={ ( media ) => {
								setAttributes( {
									iconId: media.id,
									iconSrc: media.url,
								} );
							} }
							allowedTypes={ [ 'image' ] }
							value={ iconId }
							render={ ( { open } ) => (
								<IconButton
									className="components-toolbar__control"
									label={ __( 'Edit icon' ) }
									icon="format-image"
									onClick={ open }
									disabled={ false }
								/>
							) }
						/>
					</Toolbar>
				</MediaUploadCheck>
				<Toolbar
					controls={ [
						{
							icon: 'edit',
							title: __( 'Edit' ),
							onClick: () =>
								setAttributes( { editMode: ! editMode } ),
							isActive: editMode,
						},
					] }
				/>
			</BlockControls>
		);
	};

	const getInspectorControls = () => {
		const { metas, catOperator } = attributes;
		const url = attributes.mediaSrc || getImageSrcFromProduct( product );
		const { focalPoint = { x: 0.5, y: 0.5 } } = attributes;
		// FocalPointPicker was introduced in Gutenberg 5.0 (WordPress 5.2),
		// so we need to check if it exists before using it.
		const focalPointPickerExists = typeof FocalPointPicker === 'function';

		return (
			<InspectorControls key="inspector">
				<PanelBody
					title={ __( 'Content', 'woo-gutenberg-products-block' ) }
				>
					<ToggleControl
						label={ __(
							'Show description',
							'woo-gutenberg-products-block'
						) }
						checked={ attributes.showDesc }
						onChange={
							// prettier-ignore
							() => setAttributes( { showDesc: ! attributes.showDesc } )
						}
					/>
					<ToggleControl
						label={ __(
							'Show price',
							'woo-gutenberg-products-block'
						) }
						checked={ attributes.showPrice }
						onChange={
							// prettier-ignore
							() => setAttributes( { showPrice: ! attributes.showPrice } )
						}
					/>
					<ToggleControl
						label={ __(
							'Show icon',
							'woo-gutenberg-products-block'
						) }
						checked={ attributes.showIcon }
						onChange={
							// prettier-ignore
							() => setAttributes( { showIcon: ! attributes.showIcon } )
						}
					/>
					<ToggleControl
						label={ __(
							'Geneigte Fußzeile',
							'woo-gutenberg-products-block'
						) }
						checked={ attributes.hasInclineFooter }
						onChange={
							// prettier-ignore
							() => setAttributes( { hasInclineFooter: ! attributes.hasInclineFooter } )
						}
					/>
					<ToggleControl
						label={ __(
							'Button hat Rand',
							'woo-gutenberg-products-block'
						) }
						checked={ attributes.hasButtonBorder }
						onChange={
							// prettier-ignore
							() => setAttributes( { hasButtonBorder: ! attributes.hasButtonBorder } )
						}
					/>
				</PanelBody>
				<PanelBody
					title={ __(
						'Filter by Custom Meta',
						'woo-gutenberg-products-block'
					) }
				>
					<ProductMetaControl
						selected={ metas }
						onChange={ ( value = [] ) => {
							const ids = value.map( ( { id } ) => id );
							const slugs = value.map( ( { slug } ) => slug );
							const productIds = value.map(
								( { products } ) => products
							);
							setAttributes( {
								productId: productIds.length
									? productIds[ 0 ]
									: null,
								metas: ids,
								slug: slugs.length ? slugs[ 0 ] : null,
							} );
						} }
						operator={ catOperator }
						onOperatorChange={ ( value = 'any' ) =>
							setAttributes( { catOperator: value } )
						}
						isSingle={ true }
						setAttributes={ setAttributes }
					/>
				</PanelBody>
				<PanelColorSettings
					title={ __( 'Overlay', 'woo-gutenberg-products-block' ) }
					colorSettings={ [
						{
							value: overlayColor.color,
							onChange: setOverlayColor,
							label: __(
								'Overlay Color',
								'woo-gutenberg-products-block'
							),
						},
					] }
					initialOpen={ false }
				>
					{ !! url && (
						<Fragment>
							<RangeControl
								label={ __(
									'Background Opacity',
									'woo-gutenberg-products-block'
								) }
								value={ attributes.dimRatio }
								onChange={ ( ratio ) =>
									setAttributes( { dimRatio: ratio } )
								}
								min={ 0 }
								max={ 100 }
								step={ 10 }
							/>
							{ focalPointPickerExists && (
								<FocalPointPicker
									label={ __( 'Focal Point Picker' ) }
									url={ url }
									value={ focalPoint }
									onChange={ ( value ) =>
										setAttributes( { focalPoint: value } )
									}
								/>
							) }
						</Fragment>
					) }
				</PanelColorSettings>
			</InspectorControls>
		);
	};

	const renderProduct = () => {
		const {
			className,
			contentAlign,
			dimRatio,
			focalPoint,
			height,
			showDesc,
			showPrice,
			showIcon,
			iconSrc,
		} = attributes;

		const classes = classnames(
			'wc-block-product-meta',
			{
				'is-selected': isSelected && attributes.productId !== 'preview',
				'is-loading': ! product && isLoading,
				'has-incline-footer': attributes.hasInclineFooter,
				'has-button-border': attributes.hasButtonBorder,
				'is-not-found': ! product && ! isLoading,
				'has-icon': attributes.showIcon,
				'has-background-dim': dimRatio !== 0,
			},
			dimRatioToClass( dimRatio ),
			contentAlign !== 'center' && `has-${ contentAlign }-content`,
			className
		);

		const style = getBackgroundImageStyles(
			attributes.mediaSrc || product
		);

		if ( overlayColor.color ) {
			style.backgroundColor = overlayColor.color;
		}
		if ( focalPoint ) {
			const bgPosX = focalPoint.x * 100;
			const bgPosY = focalPoint.y * 100;
			style.backgroundPosition = `${ bgPosX }% ${ bgPosY }%`;
		}

		const onResizeStop = ( event, direction, elt ) => {
			setAttributes( { height: parseInt( elt.style.height, 10 ) } );
		};

		const setExtraProductMetas = () => {
			const permalink = product.permalink;
			const metas = product.meta_data;
			const slug = attributes.slug;
			const note =
				( ( m ) =>
					m.filter(
						( item ) => item.key === `_hal_footer_${ slug }`
					) )( metas )[ 0 ].value || attributes.note;
			const heading =
				( ( m ) =>
					m.filter(
						( item ) => item.key === `_hal_header_${ slug }`
					) )( metas )[ 0 ].value || attributes.heading;
			setAttributes( {
				heading,
				note,
				permalink,
				productId: product.id,
			} );
		};
		setExtraProductMetas();

		return (
			<div className="block-wrapper">
				{ showIcon && (
					<div className="wc-block-product-meta__icon-wrapper">
						<div className="wc-block-product-meta__icon">
							<div className="icon-text">{ renderHeader() }</div>
							<div className="icon-img">
								<img src={ iconSrc } alt="icon" rel="icon" />
							</div>
						</div>
					</div>
				) }
				<ResizableBox
					className={ classes }
					height={ height }
					minHeight={ MIN_HEIGHT }
					maxHeight={ MAX_HEIGHT }
					enable={ { bottom: true } }
					onResizeStop={ onResizeStop }
					style={ style }
				>
					<div className="wc-block-product-meta__wrapper">
						<h2
							className="wc-block-product-meta__title"
							dangerouslySetInnerHTML={ {
								__html: product.name,
							} }
						/>

						{ ! isEmpty( product.variation ) && (
							<h3
								className="wc-block-product-meta__variation"
								dangerouslySetInnerHTML={ {
									__html: product.variation,
								} }
							/>
						) }
						{ showDesc && (
							<div
								className="wc-block-product-meta__description"
								dangerouslySetInnerHTML={ {
									__html: product.description,
								} }
							/>
						) }
						{ showPrice && (
							<div
								className="wc-block-product-meta__price"
								dangerouslySetInnerHTML={ {
									__html: product.price_html,
								} }
							/>
						) }
						<div className="wc-block-product-meta__link">
							{ renderButton() }
						</div>
					</div>
					<div className="wc-block-product-meta__footer">
						{ renderFooter() }
					</div>
				</ResizableBox>
			</div>
		);
	};

	const renderButton = () => {
		const buttonClasses = classnames(
			'wp-block-button__link',
			'is-style-fill'
		);
		const buttonStyle = {
			backgroundColor: 'vivid-green-cyan',
			borderRadius: '5px',
		};
		const wrapperStyle = {
			width: '100%',
		};
		return attributes.productId === 'preview' ? (
			<div className="wp-block-button aligncenter" style={ wrapperStyle }>
				<RichText.Content
					tagName="a"
					className={ buttonClasses }
					href={ product.url }
					title={ attributes.linkText }
					style={ buttonStyle }
					value={ attributes.linkText }
					target={ product.url }
				/>
			</div>
		) : (
			<InnerBlocks
				template={ [
					[
						'core/button',
						{
							text: __(
								'Shop now',
								'woo-gutenberg-products-block'
							),
							url: product.permalink,
							align: 'center',
						},
					],
				] }
				templateLock="all"
			/>
		);
	};

	const renderHeader = () => {
		const headerStyle = {
			backgroundColor: 'transparent',
			color: '#e5e5e5',
		};
		return (
			<div className="icon-text-inner">
				<PlainText
					tagName={ attributes.tagName }
					value={ attributes.heading }
					onChange={ ( value ) =>
						setAttributes( { heading: value } )
					}
					style={ headerStyle }
				/>
			</div>
		);
	};
	const renderFooter = () => {
		const footerClasses = classnames();
		const footerStyle = {
			backgroundColor: 'transparent',
			color: '#ffffff',
			textAlign: 'center',
		};
		return (
			<div className="wp-block-footer aligncenter">
				<PlainText
					className={ footerClasses }
					tagName={ attributes.tagName }
					value={ attributes.note }
					onChange={ ( value ) => setAttributes( { note: value } ) }
					style={ footerStyle }
				/>
			</div>
		);
	};

	const renderNoProduct = () => (
		<Placeholder
			className="wc-block-product-meta"
			icon="buddicons-groups"
			label={ __( 'Specials Product', 'woo-gutenberg-products-block' ) }
		>
			{ isLoading ? (
				<Spinner />
			) : (
				__(
					'No Specials Product found.',
					'woo-gutenberg-products-block'
				)
			) }
		</Placeholder>
	);

	const { editMode } = attributes;

	if ( error ) {
		return renderApiError();
	}

	if ( editMode ) {
		return renderEditMode();
	}

	return (
		<Fragment>
			{ getBlockControls() }
			{ getInspectorControls() }
			{ product ? renderProduct() : renderNoProduct() }
		</Fragment>
	);
};

ProductMeta.propTypes = {
	/**
	 * The attributes for this block.
	 */
	attributes: PropTypes.object.isRequired,
	/**
	 * Whether this block is currently active.
	 */
	isSelected: PropTypes.bool.isRequired,
	/**
	 * The register block name.
	 */
	name: PropTypes.string.isRequired,
	/**
	 * A callback to update attributes.
	 */
	setAttributes: PropTypes.func.isRequired,
	// from withProductMetas
	error: PropTypes.object,
	getProduct: PropTypes.func,
	isLoading: PropTypes.bool,
	product: PropTypes.shape( {
		name: PropTypes.node,
		variation: PropTypes.node,
		description: PropTypes.node,
		price_html: PropTypes.node,
		permalink: PropTypes.string,
	} ),
	// from withColors
	overlayColor: PropTypes.object,
	setOverlayColor: PropTypes.func.isRequired,
	// from withSpokenMessages
	// debouncedSpeak: PropTypes.func.isRequired,
};

export default compose(
	withColors( { overlayColor: 'background-color' } ),
	withSpokenMessages,
	withProductMetas
)( ProductMeta );
