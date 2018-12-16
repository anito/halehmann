/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function ($) {
    
    jQuery('.fancybox').each(function (galleryIndex) {

        jQuery('figure img', $(this)).each(function () {

            var src = $(this).attr('srcset'), a, c, caption, regex, subst, inner = $(this), outer;

            src_big = function (src) {

                regex = /(.*)(-\d{1,}x\d{1,})(.)(jpg|jpeg|png|gif)/g;
                subst = '$1$3$4';

                return src.replace(regex, subst);

            }

            caption = $(this).parents('[class*="slide-"]').find('.caption').text();
            
            if( $(this).find('a').length ) {
                console.log(a)
                outer = a[0];
            } else {
//                console.log('2')
                outer = '<a></a>';
            }
//            console.log(outer)
            outer = $(outer);
            $(outer).attr( {
                'href': src_big(this.src),
                'data-fancybox' : 'gallery-' + galleryIndex,
                'data-caption' : caption
            } );// = '<a href="' + src_big(this.src) + '" data-fancybox="gallery-' + galleryIndex + '" data-caption="' + caption + '">';
//            outer = '<a href="' + src_big(this.src) + '" data-fancybox="gallery-' + galleryIndex + '" data-caption="' + caption + '">';

            inner.wrap(outer);

        });
        
        $(this).wrap('<div class="entry-post wrapper"></div>')

    });
    
    $('.fancybox a').fancybox({
        helpers : {
            overlay : {
                css : {
                    'background' : '#f00'
                }
            }
        }
    });

})(jQuery)
