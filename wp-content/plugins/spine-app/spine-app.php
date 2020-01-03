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
// Additionally adijust the header-bottom.php template in your mobilestore theme accordingly for this to take effect
require_once dirname( __FILE__ ) . '/class-wptouch-helper.php';
$spine_wptouch_helper = new spine_wptouch_helper();
$spine_wptouch_helper->init();