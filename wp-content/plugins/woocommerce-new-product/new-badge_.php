<?php
/*
  Plugin Name: WooCommerce Neue Produkte
  Plugin URI: http:/webpremiere.de
  Version: 0.5
  Description: Label für kürzlich veröffentlichte WooCommerce Produkte
  Author: Axel Nitzschner
  Author URI: http:/webpremiere.de
  Text Domain: woocommerce-new-badge
  Domain Path: /languages/

  License: GNU General Public License v3.0
  License URI: http://www.gnu.org/licenses/gpl-3.0.html
 */

/**
 * Check if WooCommerce is active
 * */
if ( in_array( 'woocommerce/woocommerce.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) ) ) {

	add_action( 'init', 'plugin_init' );
	add_action( 'pre_get_posts', 'init_new_products' );
	// add_action( 'get_posts', 'init_new_products' );

	/**
	 * Localisation (with WPML support)
	 * */
	function plugin_init() {
		load_plugin_textdomain( 'woocommerce-new-badge', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );
	}

	function may_be_filtered_post() {
		global $wp_query;

		$args = array(
			'posts_per_page' => -1,
			'tax_query' => array(
				'relation' => 'AND',
				array(
					'taxonomy' => 'product_cat',
					'field' => 'slug',
					'terms' => 'neu-im-shop'
				),
			),
			'post_type' => 'page',
			'orderby' => 'title',
		);
		$wp_query = new WP_Query( $args );

		write_log( $wp_query->is_main_query );
		// if( ! empty( $queried ) && 'product_cat' === $queried->taxonomy && get_option_category_id() == $queried->term_id ) {
		if( ! empty( $queried )  ) {
			add_filter( 'posts_where', 'filter_new_products' );

		}

	}

	function is_options_auto() {

		return ( "no" === get_option( 'wc_nb_auto' ) ) ? FALSE : TRUE;

	}

	function get_wc_nb_label() {

		return ( "" == get_option( 'wc_nb_label' )) ? WC_nb::$default_label : get_option( 'wc_nb_label' );
	}

	function get_option_category_id() {

		return get_option( 'wc_nb_categories' );
	}

	function get_option_category_slug() {

		return get_option( 'wc_nb_category_slug' );
	}

	function init_new_products( $q ) {
		global $wp_query;

		if ( !$q->is_main_query() )
			return;

		// return w/o filtering but still attach the correct label
		if ( !is_options_auto() ) {

			add_action( 'wp_enqueue_scripts', 'enqueue_script_add_badge' );
			return;

		}

		may_be_filtered_post(  );

	}

	/*
	 * Since we are not in auto mode, we must add the badge to each new product via javascript
	 */
	function enqueue_script_add_badge() {

		$params = array(
			'label' => get_wc_nb_label(),
            'category_slug' => get_option_category_slug()
		);

		// take care all new products are labeled also when Auto option is disabled
		wp_register_script( 'new_cat_badge', plugins_url( '/assets/js/new_cat_badge.js', __FILE__ ), array( 'jquery' ), '1.0', true );
		wp_enqueue_script( 'new_cat_badge' );

		// pass args to the document
		wp_localize_script( 'new_cat_badge', 'new_badge_params', $params );

	}

	function filter_new_products( $where ) {

		$days_param = get_option( 'wc_nb_newness' );
		if( isset( $_GET['days'] ) && is_numeric( $d = $_GET['days'] ) ) {
			$days_param = $d;
		}

		$date = date( 'Y-m-d', strtotime( '-' . $days_param . ' days' ) );
		$where .= " AND post_date > '" . $date . "'";

		write_log( $where );
		return $where;
	}

	/**
	 * New Badge class
	 * */
	if ( !class_exists( 'WC_nb' ) ) {

		class WC_nb {

			public static $default_label = "New";

			public function __construct() {
                if( !is_admin() ) {
                    add_action( 'wp_enqueue_scripts', array( $this, 'setup_styles' ), 999999 );  // Enqueue the styles

					if ( is_options_auto() ) {
						add_action( 'woocommerce_before_shop_loop_item_title', array( $this, 'show_product_loop_new_badge' ), 30 );
						add_filter( 'woocommerce_before_single_product_summary', array( $this, 'show_single_product_new_badge' ), 30 );
					}

				}
				add_action( 'init', array($this, 'init_settings') );

			}

			function init_settings() {

				$cat_args = array(
					'taxonomy' => 'product_cat',
					'orderby' => 'name',
					'order' => 'DESC',
					'hierarchical' => false,
					'hide_empty' => false,
				);

				$terms = get_terms( $cat_args );
				$product_categories = array();
                $category_slug = "";
				foreach ( $terms as $category ) {

                    $category_name = $category->name;
                    $category_id = $category->term_id;
                    $category_option_id = intval( get_option( 'wc_nb_categories' ) );
					$product_categories[$category_id] = $category_name;

                    if( $category_option_id === $category_id ) {
                        $category_slug = $category->slug;
                    }
				}

				$this->settings = array(
					array(
						'title' => __( 'Neue Produkte', 'woocommerce' ),
						'type' => 'title',
						'desc' => sprintf( __( 'Produkte können als "Neu" gekennzeichnet werden, bis das hier angegebene Höchstalter erreicht ist.' ) ),
						'id' => 'wc_nb_options',
					),
					array(
						'title' => __( 'Ermittlung nach Höchstalter', 'woocommerce-new-badge' ),
						'desc' => __( "Neue Produkte nach Höchstalter ermitteln.", 'woocommerce-new-badge' ),
						'id' => 'wc_nb_auto',
						'type' => 'checkbox',
						'default' => 'false',
						'checkboxgroup'   => 'start',
						'show_if_checked' => 'option',
					),
					array(
						'title' => "Name der Kategorie für neue Produkte",
						'id' => 'wc_nb_categories',
						'type' => 'select',
						'options' => $product_categories,
					),
					array(
						'title' => "Name der Kategorie für neue Produkte",
						'id' => 'wc_nb_category_slug',
						'type' => 'hidden',
                        'default' => $category_slug
					),
					array(
						'title' => __( 'Höchstalter (in Tagen)', 'woocommerce-new-badge' ),
						'desc' => __( 'Anzahl der Tage ab Veröffentlichung, die das Produkt als <strong>neu</strong> gelten soll', 'woocommerce-new-badge' ),
						'desc_tip' => true,
						'id' => 'wc_nb_newness',
						'type' => 'number',
						'show_if_checked' => 'yes',
					),
					array(
						'title' => __( 'Label (Standard: ' . WC_nb::$default_label . ')', 'woocommerce-new-badge' ),
						'desc_tip' => 'Text der für die Kennzeichnung neuer Produkte verwendet werden soll',
						'placeholder' => WC_nb::$default_label,
						'id' => 'wc_nb_label',
						'type' => 'text',
					),
					array(
						'type' => 'sectionend',
						'id' => 'wc_nb_options',
					),
				);

				// Default options
				add_option( 'wc_nb_newness', '30' );
				add_option( 'wc_nb_category_slug', $category_slug );


				// Admin
				add_filter( 'woocommerce_get_sections_products', array( $this, 'admin_sections' ), 20 );
				add_filter( 'woocommerce_get_settings_products', array( $this, 'admin_settings' ), 20, 2 );
			}



			/* ----------------------------------------------------------------------------------- */
			/* Class Functions */
			/* ----------------------------------------------------------------------------------- */

			// Load the sections
			function admin_sections( $sections ) {
				$sections[ 'new_products'] = __( 'Neue Produkte', 'woocommerce' );
				return  $sections;
			}

			// Load / Save the settings
			function admin_settings( $settings, $current_section ) {
				if( 'new_products' == $current_section ) {
					return $this->settings;
				} else {
					return $settings;
				}
			}

			// Setup styles
			function setup_styles() {
				if ( apply_filters( 'woocommerce_new_badge_enqueue_styles', true ) ) {
                    wp_enqueue_style( 'nb-styles', plugins_url( '/assets/css/style.css', __FILE__ ), array(), '0.5' );
				}
			}

			function get_default_label() {
				return esc_html( self::$default_label);
			}
			/* ----------------------------------------------------------------------------------- */
			/* Frontend Functions */
			/* ----------------------------------------------------------------------------------- */
			function  is_new() {

				$postdate = get_the_time( 'Y-m-d' );   // Post date
				$postdatestamp = strtotime( $postdate );   // Timestamped post date
				$newness = get_option( 'wc_nb_newness' );  // Newness in days as defined by option
				$date = strtotime( date( 'Y-m-d', strtotime( '-' . $newness . ' days' ) ) );
				return $date <= $postdatestamp;

			}
			function output($classes) {

				$label = get_wc_nb_label(); // label text as defined by option
				echo '<span class="wc-new-badge badge ' . $classes . '">' . __( $label, 'woocommerce-new-badge' ) . '</span>';

			}
			// Display the NEW badge for loop items
			function show_product_loop_new_badge() {

                // If the product was published within the newness time frame display the new badge
				if ( $this->is_new() ) {
					$this->output( 'left');
				}
			}
			// Display the NEW badge for single products
			function show_single_product_new_badge() {
                if ( $this->is_new() ) {
					$this->output( 'right');
				}
			}

		}

		$WC_nb = new WC_nb();
	}
}
