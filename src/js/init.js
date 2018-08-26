jQuery(document).ready(function($) {

    /**
     * Variables
     */
    var $body = $('body'),
        $page = $('#page'),
        $headerNav = $('.header__nav'),
        $hamburger = $('.hamburger'),
        $headerSearch = $('.mod-search'),
        // Responsive breakpoints
        xs = 0,
        sm = 576,
        md = 768,
        lg = 991,
        xl = 1199;


        /**
         * Go top
         */
        $('.go_top_link').scrollToTop();

        /**
         * Input Field Mask
         */
        $(".phone-mask").inputmask({"mask": "+7 (999) 999-99-99"});

        /**
         * Tooltips (not bootstrap)
         */
        /*$('.hasTooltip').easyTooltip({
         xOffset: 0
         });*/

        /**
         * Form styler plugin
         */
        // $('select').styler({
        //     selectSmartPositioning: true
        // });

    /* Magnific Popus windows
       ========================================================================= */

        /**
         * Type image
         */
        $('.popup-image').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: true,
            fixedContentPos: true,
            mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                verticalFit: true
            },
            zoom: {
                enabled: true,
                duration: 300 // don't foget to change the duration also in CSS
            }
        });

        /**
         * Type inline
         */
        $('.popup-window').magnificPopup({
            type: 'inline',
            fixedContentPos: true,
            fixedBgPos: true,
            overflowY: 'auto',
            closeBtnInside: true,
            preloader: false,
            midClick: true,
            mainClass: 'mfp-scale',
            removalDelay: 160
        });

        /**
         * Type iframe (video)
         */
        $('.popup-video').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-scale',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false
        });

        /**
         * Type inline - focus on filed #name
         */
        $('.popup-form').magnificPopup({
            type: 'inline',
            fixedContentPos: true,
            fixedBgPos: true,
            overflowY: 'auto',
            closeBtnInside: true,
            preloader: false,
            midClick: true,
            mainClass: 'mfp-scale',
            removalDelay: 160,
            focus: '#name'
        });

    /* Sliders Owl carousel
       ========================================================================= */

        $('.slider').owlCarousel({
            autoplay: false,
            loop: false,
            margin: 10,
            nav: false,
            dots: true,
            autoHeight: false,
            autoHeightClass: 'owl-height',
            navText: ['<svg class="icon icon-chevron-left"><use xlink:href="#chevron-left"></use></svg>', '<svg class="icon icon-chevron-right"><use xlink:href="#chevron-right"></use></svg>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });


    /* Toggle search
       ========================================================================= */
        $headerSearch.on('shown.bs.dropdown', function() {
            var $this = $(this);
            $this.find('.search-form__inputbox').focus();
            setTimeout(function() {
                $this.addClass('animate');
                $body.addClass('animate');
            }, 100);
            $page.before('<div class="overlay"></div>');
        });

        $('.search-form .inputbox').on('click', function(event){
            event.stopPropagation();
        });

        $headerSearch.on('hidden.bs.dropdown', function() {
            $(this).removeClass('animate');
            $body.removeClass('animate').find('> .overlay').remove();
        });


        /* Show/Hide mobile sidebar
           ========================================================================= */
            enquire.register("screen and (max-width:" + lg + "px)", {
                match: function() {
                    /**
                     * Init Accordeon menu
                     */
                    $headerNav.find('.menu').dropdownMenu({
                        destroy: false,
                        drpArrow: true
                    });
                },
                deferSetup: true,
                setup: function() {
                    /**
                     * Show/Hide sidebar
                     */
                    // Show sidebar
                    $hamburger.on('click', function(event) {
                        event.preventDefault();
                        event.stopPropagation();

                        $this = $(this);
                        $this.toggleClass('open');
                        $body.toggleClass('open-nb');

                        if($this.hasClass('open')) {
                            $page.prepend('<div class="overlay"></div>');
                        } else {
                            $body.find('.overlay').remove();
                        }

                        setTimeout(function() {
                            $body.toggleClass('animate');
                        }, 100);
                    });

                    // Hide sidebar on page click/tap.
                    $(document).on('click touchend', function(event) {
                        if ($(event.target).closest($hamburger).length || $(event.target).closest($headerNav).length) return;
                        $body.removeClass('open-nb animate');
                        $body.find('.overlay').remove();
                        $hamburger.removeClass('open');
                    });
                },
                unmatch: function() {
                    /**
                     * Destroy dropdown (akkordeon) menu
                     */
                    $headerNav.find('.menu').dropdownMenu({
                        destroy: true
                    });
                }
            });

}); // end ready