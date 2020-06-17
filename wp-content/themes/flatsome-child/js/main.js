(function ($) {

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

    //add disclaimer to MagicToolbox Container
    var disclaimer = "Abbildung kann ähnlich sein. Änderungen und Irrtümer vorbehalten. Mögliches Zubehör auf Bildern ist nicht Teil des Angebots.";
    var add_image_disclaimer = function () {
        $('.woocommerce-product-gallery').after('<div class="product-gallery-disclaimer">' + disclaimer + '</div>');
    }

    //add readmore behaviour
    var add_readmore = function () {
        $('p').readmore({
            speed: 75,
            moreLink: '<a href="#">[mehr lesen]</a>',
            lessLink: '<a href="#">[weniger lesen]</a>'
        });
    };

    // animate scroll
    var add_animate_scroll = function() {
        const headerEl = document.querySelector('#header'),
        headerHeight = headerEl.offsetHeight;

        $('.animate-scroll a[href^="#"]').on('click', function(e){

            var href = $(this).attr('href');
            $('html, body').animate({
                scrollTop:$(href).offset().top - headerHeight
            },'slow');

            e.preventDefault();

        });

    };

    var add_replace_product_meta_elements = function( str ) {
        const internal = 'product-meta';
        let source, parent, html, targetEl, metaEls;
        metaEls = document.querySelectorAll( `[class*=${internal}-${str}]` );
        source = Array.from( metaEls );
        console.log( source )
        let replace = function() {
            source.forEach( (element, id) => {
                parent = element.parentNode;
                console.log( element, id )
                html = parent.innerHTML;
                targetEl = document.getElementById( `${internal}-${str}-${id}` );
                targetEl.innerHTML = html;
            } );
        }
        setTimeout( replace, 3000 );

    }
    add_fb_div();
    add_target_blank_icon();
    add_image_disclaimer();
    add_animate_scroll();
    add_replace_product_meta_elements( 'test' );
    // add_readmore();

})(jQuery)