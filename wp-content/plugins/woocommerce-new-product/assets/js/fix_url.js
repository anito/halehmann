(function ($) {

    var rewrite = function () {

        var days = new_products_param.days;
        $('a[href$="neu-im-shop/"]').each(function ($i) {
            $(this).attr('href', `/shop/?orderby=date&new-products&days=${days}`);
        })
    }

    rewrite();

})(jQuery)
