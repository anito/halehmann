<?php
/*
Plugin Name: Improved Product Options for WooCommerce Filter
Plugin URI: http:/webpremiere.de
Description: Filter für Improved Product Options Plugin
Version: 1.0.0
Author: Axel Nitzschner
Author URI: 
Domain Path: /languages/
License: GPLv2
*/

/**
 * Check if WooCommerce is active
 * */
if ( in_array( 'improved-variable-product-attributes/improved-variable-product-attributes.php', apply_filters( 'wc_av_active_plugins', get_option( 'active_plugins' ) ) ) ) {

	/**
	 * Localisation (with WPML support)
	 * */
	add_action( 'init', 'wc_av_plugin_init' );

	function wc_av_plugin_init() {
		
		load_plugin_textdomain( 'woocommerce-archive-variants', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );
		
	}

	function is_options_active() {
        
		return ( "no" === get_option( 'wc_av_active' ) ) ? FALSE : TRUE;
        
	}
	
	if ( !class_exists( 'WC_av' ) ) {

		class WC_av {

			public function __construct() {
				
				if ( !class_exists( 'Woocommerce' ) || !class_exists( 'WC_Improved_Variable_Product_Attributes' )) {
//					return;
				}
				
                if( !is_admin() ) {
                    add_action( 'wp_enqueue_scripts', array( $this, 'setup_styles' ), 999999 );  // Enqueue the styles
                }
                
				if ( is_options_active() ) {
//					add_action( 'woocommerce_before_shop_loop_item_title', array( $this, 'show_product_loop_new_badge' ), 30 );
//					add_filter( 'woocommerce_before_single_product_summary', array( $this, 'show_single_product_new_badge' ), 30 );
				}
				
//				add_action( 'plugins_loaded', array($this, 'init_settings') );
				add_action( 'init', array($this, 'init_settings') );
				
			}

			function init_settings() {
				
				$cat_args = array(
					'taxonomy' => 'product_cat',
					'orderby' => 'name',
					'order' => 'DESC',
					'hierarchical' => True,
					'hide_empty' => false,
				);
				
				$terms = get_terms( $cat_args );
				$product_categories = array();
                
				foreach ( $terms as $category ) {
					
                    $category_name = $category->name;
                    $category_id = $category->term_id;
                    $category_option_id = intval( get_option( 'wc_av_categories' ) );
					$product_categories[$category_id] = $category_name;
					
				}
				
				$this->settings = array(
					array(
						'title' => __( 'Archiv Varianten', 'woocommerce' ),
						'type' => 'title',
						'desc' => sprintf( __( 'Wähle die Produktkategorien aus, deren Varianten im Archiv angezeigt werden sollen' ) ),
						'id' => 'wc_av_options',
					),
					array(
						'title' => __( 'Aktivierung', 'woocommerce' ),
						'desc' => __( "", 'woocommerce' ),
						'id' => 'wc_av_active',
						'type' => 'checkbox',
						'default' => 'false',
						'checkboxgroup'   => 'start',
						'show_if_checked' => 'option',
					),
					array(
						'title' => "Produkt Kategorien",
						'id' => 'wc_av_categories',
						'options' => $product_categories,
						'type'		=> 'multiselect',
						'desc' 		=> __( 'Wähle Produkt-Kategorien aus deren Varianten im Archiv dargestellt werden sollen', 'woocommerce-germanized' ),
						'desc_tip'	=> true,
						'id' 		=> 'wc_av_display_categories',
						'class' 	=> 'chosen_select',
						'default'	=> array( '' ),
					),
					array(
						'type' => 'sectionend',
						'id' => 'wc_av_options',
					),
				);
				
				// Admin
				add_filter( 'woocommerce_get_sections_products', array( $this, 'admin_sections' ), 20 );
				add_filter( 'woocommerce_get_settings_products', array( $this, 'admin_settings' ), 20, 2 );
				
				add_action( 'init', array( $this, 'remove_ivpa_action' ), 999 );
				
			}

				
			
			/* ----------------------------------------------------------------------------------- */
			/* Class Functions */
			/* ----------------------------------------------------------------------------------- */

			// Load the sections
			function admin_sections( $sections ) {
				$sections[ 'archive_variants'] = __( 'Archiv Varianten', 'woocommerce' );
				return  $sections;
			}

			// Load / Save the settings
			function admin_settings( $settings, $current_section ) {
				if( 'archive_variants' == $current_section ) {
					return $this->settings;
				} else {
					return $settings;
				}
			}

			// Setup styles
			function setup_styles() {
				if ( apply_filters( 'woocommerce_archive_variants_enqueue_styles', true ) ) {
                    wp_enqueue_style( 'av-styles', plugins_url( '/assets/css/style.css', __FILE__ ), array(), '0.5' );
				}
			}
			
			/* ----------------------------------------------------------------------------------- */
			/* Frontend Functions */
			/* ----------------------------------------------------------------------------------- */
			function get_allowed_categories() {
				static $allowed_cats;
				if( NULL === $allowed_cats ) {
					$allowed_cats = get_option( 'wc_av_display_categories' );
				}
				return $allowed_cats;
			}
			function remove_ivpa_action( $a ) {
				add_action( 'woocommerce_before_shop_loop_item', array( $this, 'init_archiv_variants' ), 0 );
				
			}
			function init_archiv_variants( $q ) {
				if ( 'no' === get_option( 'wc_av_active' ) ) {
					return;
				}
				
				global $product;
				$instance = WC_Improved_Variable_Product_Attributes::this();
				$settings = $instance::$settings;
				$wc_archive_action = $settings['wc_settings_ivpa_archive_action'];
				if ( $wc_archive_action != '' && strpos( $wc_archive_action, ':') > 0 ) {
					$explode = explode( ':', $wc_archive_action );
					$archive_action = $explode[0];
					$priority = $explode[1];
				} else {
					$archive_action = 'woocommerce_after_shop_loop_item_title';
					$priority = 10;
				}
				$settings['archive_action'] = $archive_action;
				$cat_ids = $product->get_category_ids();
				$allowed_cat_ids = $this->get_allowed_categories();
				$found = false;
				foreach ( $cat_ids as $cat_id ) {
					if( in_array( $cat_id, $allowed_cat_ids ) ) {
						$found = true;
						break;
					}
				}
				if ($found) {
					add_action( $archive_action, array( $instance, 'ivpa_attributes' ), $priority );
				} else {
					remove_action( $archive_action, array( $instance, 'ivpa_attributes' ), $priority );
				}
			}

		}

		$WC_av = new WC_av();
	}
	
}