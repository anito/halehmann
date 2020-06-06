(function ($) {

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

    //add disclaimer to MagicToolbox Container
    var disclaimer = "Abbildung kann ähnlich sein. Änderungen und Irrtümer vorbehalten.<br\>Mögliches Zubehör auf Bildern ist nicht Teil des Angebots.";
    var add_image_disclaimer = function () {
        $('.MagicToolboxContainer').append('<span class="disclaimer">' + disclaimer + '</span>');
    }

    //add readmore behaviour
    var add_readmore = function () {
        $('p').readmore({
            speed: 75,
            moreLink: '<a href="#">[mehr lesen]</a>',
            lessLink: '<a href="#">[weniger lesen]</a>'
        });
    };

    add_fb_div();
    add_adult_badge();
    add_target_blank_icon();
    add_image_disclaimer();
    add_readmore();

})(jQuery)