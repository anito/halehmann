(function ($) {

    var add_cat_new_badge = function () {
        var label = new_badge_params.label,
            category_slug = new_badge_params.category_slug,
            tmpl = '<span class="wc-new-badge badge">' + label + '</span>'
            templFn = function() {
                return $('<span class="wc-new-badge badge">' + label + '</span>');
            }
            console.log(category_slug)
        $('.product_cat-' + category_slug).each(function ( i, el) {
            if($(this).is('li')) {
                console.log($(this))
                $(this).find('img').after($(tmpl).addClass('left'));
            } else {
                if( $('.product-top').length) { // wptouch
                    $('.product-top').prepend($(tmpl).addClass('right'));
                } else {
                    $(this).find('.summary').before($(tmpl).addClass('right'));
                }
            }
        })
    }

    add_cat_new_badge();

})(jQuery)
