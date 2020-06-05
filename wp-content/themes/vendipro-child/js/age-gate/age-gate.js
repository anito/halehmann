(function ($) {
    'use strict';

    $.add_listener = function () {

        $('.age-gate-form .goback').on( 'click', function( e ) {
            e.preventDefault();
            history.go(-1);
        })

    }
})(jQuery)
jQuery.add_listener();