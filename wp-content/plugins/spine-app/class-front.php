<?php
defined('ABSPATH') or die("you do not have access to this page!");

class Spine_js_front {

    private static $_this;
    
    function __construct() {
        
        $this->active = false;

        if (isset(self::$_this))
            return self::$_this;
            // wp_die(sprintf(__('%s is a singleton class and you cannot create a second instance.', 'spine-js'), get_class($this)));

        self::$_this = $this;

    }

    static function this() {
        return self::$_this;
    }

    public function init() {

        // WPTouch Off Canvas Menu (the left one) defaults to pages list
        // We change that here by giving the option for an "Alternate Pages Menu" in Menu Settings
        // To make that work the header-bottom.php template in your mobilestore theme should be changed accordingly for this to take effect
        // Additionally adijust the header-bottom.php template in your mobilestore theme accordingly for this to take effect
        $this->active = get_option('spine_js_settings_wpt')['active'];
        if( $this->active  ) {
            require_once dirname( __FILE__ ) . '/classes/class-wptouch-helper.php';
            $spine_wptouch_helper = new Spine_js_wpt();
            $spine_wptouch_helper->init();
        }
    }
            
}