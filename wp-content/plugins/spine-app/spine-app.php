<?php
/*
Plugin Name: Spine App
Plugin URI: https://webpremiere.de
Description: Extend Wordpress by SpineJS
Version: 1.0.9
Author: Webpremiere
Author URI: https://webpremiere.de
Text Domain: spine-app
Domain Path: /languages
*/
// Exit if accessed directly
defined('ABSPATH') or die("you do not have access to this page!");

function SPINEJS()
{
    return SpineApp_Public::instance();
}

if ( is_admin() ) {
	require_once dirname( __FILE__ ) . '/class-spineapp-public.php';
	add_action('plugins_loaded', 'SPINEJS', 8);
} else {
	//	do nothing
}

// WPTouch Off Canvas Menu (the left one) defaults to pages list
// We change that here by giving the option for an "Alternate Pages Menu" in Menu Settings
// Also the header-bottom.php template has to be adjusted accordingly for this to take effect 
add_action( 'foundation_init', 'mobilestore_register_custom_menu', 0);
function mobilestore_register_custom_menu() {
	
	wptouch_register_theme_menu(
		array(
			'name'            => 'alternate_pages_menu',
			'friendly_name'   => __( 'Alternate Pages Menu', 'wptouch-pro' ),
			'settings_domain' => MOBILESTORE_SETTING_DOMAIN,
			'description'     => __( 'Choose a menu', 'wptouch-pro' ),
			'tooltip'         => __( 'Off-Canvas left bottom menu', 'wptouch-pro' ),
			'can_be_disabled' => false,
		)
	);
	
}