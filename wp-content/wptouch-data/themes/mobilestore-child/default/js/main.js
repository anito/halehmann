(function( $ ) {
	
        //override mobilestoreSetupHammer function in mobilestores.js
        //in order not to break magigtoolbox scripts
        var mobilestoreSetupHammer = function() {
            return false;
        }
        
	//Init Adult Badges
	var add_adult_badge = function() {
		$( '.product_tag-ab-18 .product-top' ).each(function($i) {
			$(this).append('<i class="adult"><i>');
		})
	}
	
	var add_background_image = function() {
		$( '.page-wrapper' ).addClass('camouflage');
	}
	
	//pimp search field
	var add_search_badge_el = function() {
		$( '#searchform' ).prepend('<span class="icon"><i class="wptouch-icon-search"></i></span>');
	}
	
	//add readmore behaviour
	var add_readmore = function() {
            $('#tab-description h2 + p').readmore({
              speed: 75,
              collapsedHeight: 200,
              moreLink: '<a href="#">[mehr lesen]</a>',
              lessLink: '<a href="#">[weniger lesen]</a>'
            });
        };
        
        var add_animate_scroll = function() {
            
            $('a[href^=#]').on('click', function(e){

                var href = $(this).attr('href');
                
                if(typeof $(href).offset() == 'undefined') return;
                
                $('html, body').animate({
                    scrollTop:$(href).offset().top
                },'slow');

                e.preventDefault();

            });

        };
	
        var add_check_scroll = function() {
            
            $('body').attr('id', 'the-top');
            
            $(window).on('scroll', function(e) {

                var cl = '.hal-scroll-top',
                    height = $(window).height(),
                    scrollTop = $(window).scrollTop();

                if( scrollTop > height ) {
                    make_div( cl );
                } else {
                    $( cl ).addClass( 'nomobile' );
                }

                e.preventDefault();

            });

            var make_div = function( cl ) {
                
                var str = cl,
                    tmpl,
                    el;
                
                el  = $( cl );
                str = cl.replace(/(^\.|\.)/g, " ");
                tmpl = `<div class="${str}"><a href="#the-top" class="scroll-top wptouch-icon-angle-up"></a></div>`;
                
                if( !el.length ) {
                    $('body').append( $(tmpl) );
                    add_animate_scroll();
                }

                el.removeClass( 'nomobile' );
            };

        }
	
	add_adult_badge();
	add_background_image();
	add_search_badge_el();
	add_readmore();
        add_animate_scroll();
        add_check_scroll();
	
})(jQuery);