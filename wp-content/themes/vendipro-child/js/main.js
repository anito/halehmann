(function ($) {
    'use strict';
    var $overlay = $('<div>', {
        'class': 'js--overlay'
    }).appendTo('body'),
            isOpen = false,
            openClass = 'is--open',
            closableClass = 'is--closable',
            events = ['click', 'touchstart', 'MSPointerDown'].join('.overlay') + '.overlay',
            openOverlay = function (options) {
                if (isOpen) {
                    updateOverlay(options);
                    return;
                }
                isOpen = true;
                $overlay.addClass(openClass);
                if (options && options.closeOnClick !== false) {
                    $overlay.addClass(closableClass);
                }
                $overlay.on(events, $.proxy(onOverlayClick, this, options));
            },
            closeOverlay = function () {
                if (!isOpen) {
                    return;
                }
                isOpen = false;
                $overlay.removeClass(openClass + ' ' + closableClass);
                $overlay.off(events);
            },
            onOverlayClick = function (options) {
                if (options) {
                    if (typeof options.onClick === 'function') {
                        options.onClick.call($overlay);
                    }
                    if (options.closeOnClick === false) {
                        return;
                    }
                    if (typeof options.onClose === 'function' && options.onClose.call($overlay) === false) {
                        return;
                    }
                }
                closeOverlay();
            },
            updateOverlay = function (options) {
//            $overlay.toggleClass(closableClass, options.closeOnClick !== false);
                $overlay.off(events);
//            $overlay.on(events, $.proxy(onOverlayClick, this, options));
            };
    $overlay.on('mousewheel DOMMouseScroll', function (event) {
        event.preventDefault();
    });
    $.overlay = {
        open: openOverlay,
        close: closeOverlay,
        isOpen: function () {
            return isOpen;
        },
        getElement: function () {
            return $overlay;
        }
    };
})(jQuery);

(function ($) {

    var disclaimer = "Abbildung kann ähnlich sein. Änderungen und Irrtümer vorbehalten.<br\>Mögliches Zubehör auf Bildern ist nicht Teil des Angebots.";
    //Init Adult Badges
    var add_adult_badge = function () {
        $('.product_tag-ab-18 .images').each(function ($i) {
            $(this).append('<i class="adult"><i>');
        })
    }
    $('[itemscope].product[class*="ab-18"]').prepend('<i class="note note-ab-18"><i>');

    var add_fb_div = function () {
        $('body').prepend('<div id="fb-root"></div>');
    }

    //add icon to links with target _blank
    var add_target_blank_icon = function () {
        var arr;
        $('a[target=_blank]').each( function( i, el) {
            if( !( $(el).find('img').length) ) {
                $(el).after('<i class="fa-external-link"></i>');
            }
        });
    };

    //add cart sidebar cart
    var add_sidebar_cart = function () {

    };

    //add disclaimer to MagicToolbox Container
    var add_image_disclaimer = function () {
        $('.MagicToolboxContainer').append('<span class="disclaimer">' + disclaimer + '</span>');
    }

    //add cart sidebar behaviour
    var add_mini_cart = function () {
        var sidebar = $('.cart-sidebar'),
                overlay = $('.js--overlay');
        $(document).on('click', '.mini-cart', function (e) {
            e.preventDefault();

            sidebar.addClass('is--open');
            $.overlay.open();
            return false;

        });
        $(overlay).on('click', function (e) {
            $.overlay.close();
            sidebar.removeClass('is--open');
            return false;
        });
        $(document.body).on('added_to_cart removed_from_cart quantity_updated applied_coupon removed_coupon', function(e, fragments, cart_hash, button) {
            e.preventDefault();
            $('.mini-cart').click();
        });
        $(document).on('click', '.continue-shopping', function (e) {
            e.preventDefault();

            sidebar.removeClass('is--open');
            $.overlay.close();
            return false;

        });

    };

    //add readmore behaviour
    var add_readmore = function () {
        $('p').readmore({
            speed: 75,
            moreLink: '<a href="#">[mehr lesen]</a>',
            lessLink: '<a href="#">[weniger lesen]</a>'
        });
    };

    // jQuery.blockUI defaults
    var add_jQuery_blocking = function () {
        $.blockUI.defaults.css = {
            message: "Hi"
        };
    };

    var add_animate_scroll = function() {

        $('.animate-scroll a[href^="#"]').on('click', function(e){

            var href = $(this).attr('href');
            $('html, body').animate({
                scrollTop:$(href).offset().top
            },'slow');

            e.preventDefault();

        });

    };

    var add_submit_search = function() {

        var $form = $('.aws-search-form');

        $('.aws-search-btn', $form).on('click', function(e){

            if( $form.hasClass( 'aws-form-active' ) ) {
                e.preventDefault();
                $form.submit();
            }

        });

    };

    var add_hide_empty_frontpage_news = function() {

        var news_wrapper = $('.news-wrapper'), news, list, elm, ret, cols=[];

        news_wrapper.each( (i, el)  => {
            lists = $('ul' , el);
            lists.each( ( i, ul ) => {
                var col = $(ul).parent('.wp-block-column');
                if( $( 'li', ul ).length ) {
                    col.show().addClass('shown');
                    cols.push(col)
                }
            })
        });

    }

    add_fb_div();
    add_adult_badge();
    add_target_blank_icon();
    add_sidebar_cart();
    add_mini_cart();
    add_image_disclaimer();
    add_jQuery_blocking();
    add_animate_scroll();
    add_submit_search();
    add_hide_empty_frontpage_news();
//        add_readmore();

})(jQuery)
