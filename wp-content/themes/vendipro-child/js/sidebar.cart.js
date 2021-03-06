/* global wc_cart_params */
(function ($) {

    // wc_cart_params is required to continue, ensure the object exists
    if (typeof wc_cart_params === 'undefined') {
        //return false;
    }

    // Utility functions for the file.

    /**
     * Gets a url for a given AJAX endpoint.
     *
     * @param {String} endpoint The AJAX Endpoint
     * @return {String} The URL to use for the request
     */
    var get_url = function (endpoint) {
        return wc_cart_params.wc_ajax_url.toString().replace(
                '%%endpoint%%',
                endpoint
                );
    };

    /**
     * Check if a node is blocked for processing.
     *
     * @param {JQuery Object} $node
     * @return {bool} True if the DOM Element is UI Blocked, false if not.
     */
    var is_blocked = function ($node) {
        return false;
        return $node.is('.processing') || $node.parents('.processing').length;
    };

    /**
     * Block a node visually for processing.
     *
     * @param {JQuery Object} $node
     */
    var block = function ($node) {
        if (!is_blocked($node)) {
            $node.addClass('processing').block({
                message: null,
                overlayCSS: {
                    background: '#fff',
                    opacity: 0.6
                }
            });
        }
    };

    /**
     * Unblock a node after processing is complete.
     *
     * @param {JQuery Object} $node
     */
    var unblock = function ($node) {
        $node.removeClass('processing').unblock();
    };

    /**
     * Update the .woocommerce div with a string of html.
     *
     * @param {String} html_str The HTML string with which to replace the div.
     */
    var update_wc_div = function (html_str, preserve_notices) {
        var $html = $.parseHTML(html_str);
        var $new_form = $('.woocommerce-cart-form', $html);
        var $new_form_sidebar = $('.sidebar_table.ajax-cart', $html).closest('form');
        var $new_totals = $( '.cart_totals', $html );
        var $new_subtotals_sidebar = $('.sidebar-cart-subtotals', $html);
        var $new_totals_sidebar = $('.sidebar-cart-totals', $html);
        var $new_total_amount = $('.order-total .amount', $html);
        var $new_subtotal_amount = $('.cart-subtotal .amount', $html);
        var $notices = $('.woocommerce-error, .woocommerce-message, .woocommerce-info', $html);
        
        // Remove errors
        if ( ! preserve_notices ) {
            $( '.woocommerce-error, .woocommerce-message, .woocommerce-info', $('.cart-sidebar') ).remove();
        }
        
        update_sidebar_cart_subtotals_div( $new_subtotals_sidebar);
        update_sidebar_cart_totals_div( $new_totals_sidebar );
        update_cart_totals_div( $new_totals );
        
        if ( $notices.length > 0 ) {
            show_notice( $notices);
        }

        
        // for sidebar-cart
        $('.sidebar_table.ajax-cart').closest('form').replaceWith($new_form_sidebar);
//            $('.my-cart-form').replaceWith($new_form);

        if ( $new_form.length === 0 ) {
            // If the checkout is also displayed on this page, trigger reload instead.
            if ( $( '.woocommerce-checkout' ).length ) {
//                    window.location.href = window.location.href;
//                    return;
            }

            // No items to display now! Replace all cart content.
            var $cart_html = $( '.cart-empty', $html ).closest( '.woocommerce' );
            $( '.woocommerce-cart-form__contents' ).closest( '.woocommerce' ).replaceWith( $cart_html );

            // Display errors
            if ( $notices.length > 0 ) {
                    show_notice( $notices );
            }
        } else {
            // If the checkout is also displayed on this page, trigger update event.
            if ( $( '.woocommerce-checkout' ).length ) {
                    $( document.body ).trigger( 'update_checkout' );
            }

            $( '.woocommerce-cart-form' ).replaceWith( $new_form );
            $( '.woocommerce-cart-form' ).find( ':input[name="update_cart"]' ).prop( 'disabled', true );

        }

        // update mini-cart
        $(document.body).trigger('updated_wc_div');
    };

    /**
     * Update the .cart_totals div with a string of html.
     *
     * @param {String} html_str The HTML string with which to replace the div.
     */
    var update_cart_totals_div = function (html_str) {
        $( '.cart_totals' ).replaceWith( html_str );
        $(document.body).trigger('updated_cart_totals');
    };
    
    /**
     * Update the .cart_totals div with a string of html.
     *
     * @param {String} html_str The HTML string with which to replace the div.
     */
    var update_sidebar_cart_totals_div = function (html_str) {
        $( '.sidebar-cart-totals' ).replaceWith( html_str );
        $(document.body).trigger('updated_cart_totals');
    };
    
    /**
     * Update the .sidebar-cart-subtotals div with a string of html.
     *
     * @param {String} html_str The HTML string with which to replace the div.
     */
    var update_sidebar_cart_subtotals_div = function (html_str) {
        $( '.sidebar-cart-subtotals' ).replaceWith( html_str );
        $(document.body).trigger('updated_cart_subtotals');
    };

    /**
     * Clear previous notices and shows new one above form.
     *
     * @param {Object} The Notice HTML Element in string or object form.
     */
    var show_notice = function (html_element, $target) {
        $target = $('.cart-sidebar .message-wrapper');
        $target.prepend(html_element);
    };

    /**
     * Object to handle cart UI.
     */
    var sidebar_cart = {
        /**
         * Initialize cart UI events.
         */
        init: function () {
            this.update_cart_totals = this.update_cart_totals.bind(this);
            this.cart_submit = this.cart_submit.bind(this);
            this.quantity_update = this.quantity_update.bind(this);
            this.item_remove_clicked = this.item_remove_clicked.bind(this);
            this.item_restore_clicked  = this.item_restore_clicked.bind( this );
            this.update_cart = this.update_cart.bind(this);

            $( document ).on(
                    'submit',
                    '.woocommerce-cart-form',
                    this.cart_submit );
            $(document).on(
                    'click',
                    '.product-remove > a',
                    this.item_remove_clicked);
            $(document).on(
                    'added_to_cart',
                    function() { sidebar_cart.update_cart.apply( sidebar_cart, [].slice.call( arguments, 1 ) ); } );
            $(document).on(
                    'removed_from_cart',
                    function() { sidebar_cart.update_cart.apply( sidebar_cart, [].slice.call( arguments, 1 ) ); } );
            $(document).on(
                    'cart_page_refreshed',
                    function() { sidebar_cart.update_cart.apply( sidebar_cart, [].slice.call( arguments, 1 ) ); } );
            $(document).on(
                    'removed_coupon',
                    function() { sidebar_cart.update_cart.apply( sidebar_cart ); } );
            $(document).on(
                    'applied_coupon',
                    function() { sidebar_cart.update_cart.apply( sidebar_cart ); } );
            $(document).on(
                    'click',
                    '.restore-item',
                    this.item_restore_clicked);

            $('div.woocommerce > form :input[name="update_cart"]').prop('disabled', true);
        },
        /**
         * Update entire cart via ajax.
         */
        update_cart: function (preserve_notices) {
            var $form = $('.my-cart-form'),
                $blocked_div = $(".my-cart-form, .woocommerce-cart-form, .cart_totals, .cart-collaterals-wrapper");
            
            block( $blocked_div );
            
            // Make call to actual form post URL.
            $.ajax({
                type: $form.attr('method'),
                url: $form.attr('action'),
                data: $form.serialize(),
                dataType: 'html',
                success: function (response) {
                    update_wc_div(response, preserve_notices);
                },
                complete: function () {
                    unblock( $blocked_div );
                }
            });
        },
        /**
         * Update the cart after something has changed.
         */
        update_cart_totals: function () {
            var $blocked_div = $( '.sidebar-cart-totals');
        
            block( $blocked_div );

            $.ajax({
                url: get_url('get_cart_totals'),
                dataType: 'html',
                success: function (response) {
                    update_sidebar_cart_totals_div( response );
                    update_sidebar_cart_subtotals_div( response );
                },
                complete: function () {
                    unblock( $blocked_div );
                }
            });
        },
        /**
         * Handle cart form submit and route to correct logic.
         *
         * @param {Object} evt The JQuery event
         */
        cart_submit: function (evt) {
            var $submit = $(document.activeElement),
                $clicked = $(':input[type=submit][clicked=true]'),
                $form = $(evt.currentTarget);

            // For submit events, currentTarget is form.
            // For keypress events, currentTarget is input.
            if (!$form.is('form')) {
                $form = $(evt.currentTarget).parents('form');
            }

            if (0 === $form.find('[class*="_table"][class*="cart"]').length) {
                return;
            }
            if (is_blocked($form)) {
                return false;
            }

            if ($clicked.is('[name="update_cart"]') || $submit.is('input.qty')) {
                evt.preventDefault();
                this.quantity_update($form);

            }
        },
        /**
         * Handle a cart Quantity Update
         *
         * @param {JQuery Object} $form The cart form.
         */
        quantity_update: function ($form) {
            // Provide the submit button value because wc-form-handler expects it.
            $('<input />').attr('type', 'hidden')
                    .attr('name', 'update_cart')
                    .attr('value', 'Update Cart')
                    .appendTo($form);
            
            var $blocked_div = $( '.my-cart-form, .cart-collaterals-wrapper' );

            block( $blocked_div );

            // Make call to actual form post URL.
            $.ajax({
                type: $form.attr('method'),
                url: $form.attr('action'),
                data: $form.serialize(),
                dataType: 'html',
                beforeSend: function( response ) {
                    $(document.body).trigger('quantity_updated');
                },
                success: function( response ) {
                    update_wc_div( response );
                },
                complete: function () {
                    unblock( $blocked_div );
                }
            });
        },
        /**
         * Handle when a remove item link is clicked.
         *
         * @param {Object} evt The JQuery event
         */
        item_remove_clicked: function (evt) {
            evt.preventDefault();
            
            var $a = $(evt.currentTarget),
                $blocked_div = $(".my-cart-form, .woocommerce-cart-form, .cart_totals, .cart-collaterals-wrapper");

            block( $blocked_div );

            $.ajax({
                type: 'GET',
                url: $a.attr('href'),
                dataType: 'html',
                success: function( response ) {
                    update_wc_div( response );
                },
                complete: function () {
                    unblock( $blocked_div );
                }
            });
        },
        /**
         * Handle when a restore item link is clicked.
         *
         * @param {Object} evt The JQuery event
         */
        item_restore_clicked: function( evt ) {
            evt.preventDefault();

            var $a = $(evt.currentTarget),
                $blocked_div = $('.woocommerce-cart-form, .my-cart-form, .cart-collaterals-wrapper' );

            block( $blocked_div );

            $.ajax({
                type: 'GET',
                url: $a.attr('href'),
                dataType: 'html',
                success: function (response) {
                    update_wc_div(response);
                },
                complete: function () {
                    unblock( $blocked_div );
                }
            });
        }
        
    };

    sidebar_cart.init();

})(jQuery);
