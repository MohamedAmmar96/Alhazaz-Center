$(window).on('load', function() {

    $(".loading-overlay .loading-overlay-box").fadeOut(500,
        function() {
            $(this).parent().fadeOut(500);
            $("body").removeClass("overflow")
        });
})


// Scroll To Top Button 
var scrollButton = $(".scroll-top");
$(window).scroll(function() {
    ($(this).scrollTop() >= 500) ? scrollButton.show(600): scrollButton.hide(600);
});
// Click Button to scroll top 
scrollButton.click(function() {
    $("html,body").animate({ scrollTop: 0 }, 600);
});



var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
});
wow.init();



$(document).ready(function() {

    // This is to Open Language menu in large Screens
    if (($(window).width() >= 992)) {
        $(".page-language .lang").click(function() {
            $(".lang-back").fadeIn(300);
        });
        $(".page-language .lang").click(function() {
            $(".page-language .lang").addClass("rotate");
            $(".page-language .lang-list").slideDown(300);
        });
        $(".lang-back").click(function() {
            $(".lang-back").fadeOut(300);
        });
        $(".lang-back").click(function() {
            $(".page-language .lang").removeClass("rotate");
            $(".page-language .lang-list").slideUp(300);
        });
    }
    if (($(window).width() <= 991)) {
        $(".page-language .lang").click(function() {
            $(".page-language .lang").toggleClass("rotate");
            $(".page-language .lang-list").slideToggle(300);
        });
    }

    //This is to Open Config Box
    $(".terms .config").click(function() {
        $(".overlay-box").fadeIn(300);
    });
    $(".terms .config").click(function() {
        $(".config .config-list").slideDown(300);
    });
    $(".overlay-box").click(function() {
        $(".overlay-box").fadeOut(300);
    });
    $(".overlay-box").click(function() {
        $(".config .config-list").slideUp(300);
    });

    // This is to Open Trips List
    // $(".nav-box .all-cats").click(function() {
    //     $(".overlay-box2").fadeIn(300);
    // });

    if (($(window).width() >= 992)) {
        $(".overlay-box2,.nav-box .all-cats").click(function() {
            $(".all-cats .all-cats-name").toggleClass("rotate");
            $(".cats-list").slideToggle(300);
            $(".overlay-box2").fadeToggle(300);
        });
    }
    if (($(window).width() <= 991)) {
        $(".nav-box .all-cats .all-cats-name").click(function() {
            $(".all-cats .all-cats-name").toggleClass("rotate");
            $(".cats-list").slideToggle(300);
        });
    }

    // $(".overlay-box2").click(function() {
    //     $(".overlay-box2").fadeOut(300);
    // });


    //Main Slider Carousel
    $('.main-slider .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        rtl: true,
        margin: 20,
        navText: ["<span class='fas fa-chevron-right'></span>", "<span class='fas fa-chevron-left'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            },
            768: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            },
            992: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            },
            1200: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            }
        }
    });



    $('.sub-slider .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        margin: 30,
        // stagePadding: 10,
        rtl: true,
        navText: ["<span class='fa fa-chevron-right'></span>", "<span class='fa fa-chevron-left'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                dots: true,
                nav: false,
                loop: true
            },
            500: {
                items: 2,
                dots: true,
                nav: false,
                loop: true
            },
            720: {
                items: 3,
                dots: true,
                nav: false,
                loop: true
            },
            992: {
                items: 4,
                nav: false,
                dots: true,
                loop: true
            },
            1200: {
                items: 5,
                nav: true,
                dots: true,
                loop: true
            },
            1510: {
                items: 6,
                nav: true,
                dots: true,
                loop: true
            }
        }
    });

    $('.brands .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        margin: 30,
        rtl: true,
        navText: ["<span class='fa fa-chevron-right'></span>", "<span class='fa fa-chevron-left'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                dots: true,
                nav: false,
                loop: true
            },
            480: {
                items: 3,
                dots: true,
                nav: false,
                loop: true
            },
            720: {
                items: 5,
                dots: true,
                nav: false,
                loop: true
            },
            992: {
                items: 6,
                nav: false,
                dots: true,
                loop: true
            },
            1200: {
                items: 7,
                nav: true,
                dots: true,
                loop: true
            },
            1510: {
                items: 8,
                nav: true,
                dots: true,
                loop: true
            }
        }
    });

    //This is To make faetures as slider in small screens
    if ($(window).width() <= 991) {
        $(".features .features-box").addClass("owl-carousel owl-theme");
        $(".features-box .feature").removeClass("owl-carousel");
        $('.features .owl-carousel').owlCarousel({
            loop: false,
            margin: 20,
            rtl: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    loop: false
                },
                500: {
                    items: 2,
                    nav: false,
                    loop: false
                }
            }
        })
    } else {
        $(".features-box .feature").removeClass("owl-carousel");
        $(".features-box .feature").removeClass("owl-carousel");
    };


    // To Toggle Between Footer Slide Menus
    if ($(window).width() <= 991) {
        $('.collapse[data-parent="#parent"]').on('show.bs.collapse', function() {
            $('.collapse[data-parent="#parent"]').not(this).collapse('hide');
        });
    } else {
        $(".slide-list").addClass("in")
    }

    //This is To Change between footer collapse link ----------------------------------------------------------------
    // First Collapse ---------------------------
    $(".first .footer-heading .footer-link").click(function() {
        var x = $(".first .slide-list")
        if (x.hasClass("collapse")) {
            $(".first .footer-heading .footer-link").addClass("minus")
                //----
            $(".second .footer-heading .footer-link").removeClass("minus")
            $(".third .footer-heading .footer-link").removeClass("minus")
            $(".last .footer-heading .footer-link").removeClass("minus")

        }
    });
    $(".first .footer-heading .footer-link").click(function() {
        var x = $(".first .slide-list")
        if (x.hasClass("in")) {
            $(".first .footer-heading .footer-link").removeClass("minus")
            $(".first .footer-heading .footer-link").addClass("plus")
        }
    });

    // Second Collapse ---------------------------
    $(".second .footer-heading .footer-link").click(function() {
        var x = $(".second .slide-list")
        if (x.hasClass("collapse")) {
            $(".second .footer-heading .footer-link").addClass("minus")
            $(".first .footer-heading .footer-link").removeClass("minus")
            $(".third .footer-heading .footer-link").removeClass("minus")
            $(".last .footer-heading .footer-link").removeClass("minus")
        }
    });
    $(".second .footer-heading .footer-link").click(function() {
        var x = $(".second .slide-list")
        if (x.hasClass("in")) {
            $(".second .footer-heading .footer-link").removeClass("minus")
            $(".second .footer-heading .footer-link").addClass("plus")
        }
    });

    // Third Collapse ---------------------------
    $(".third .footer-heading .footer-link").click(function() {
        var x = $(".third .slide-list")
        if (x.hasClass("collapse")) {
            $(".third .footer-heading .footer-link").addClass("minus")
            $(".first .footer-heading .footer-link").removeClass("minus")
            $(".second .footer-heading .footer-link").removeClass("minus")
            $(".last .footer-heading .footer-link").removeClass("minus")
        }
    });
    $(".third .footer-heading .footer-link").click(function() {
        var x = $(".third .slide-list")
        if (x.hasClass("in")) {
            $(".third .footer-heading .footer-link").removeClass("minus")
            $(".third .footer-heading .footer-link").addClass("plus")
        }
    });

    // Last Collapse ---------------------------
    $(".last .footer-heading .footer-link").click(function() {
        var x = $(".last .slide-list")
        if (x.hasClass("collapse")) {
            $(".last .footer-heading .footer-link").addClass("minus")
            $(".first .footer-heading .footer-link").removeClass("minus")
            $(".second .footer-heading .footer-link").removeClass("minus")
            $(".third .footer-heading .footer-link").removeClass("minus")
        }
    });
    $(".last .footer-heading .footer-link").click(function() {
        var x = $(".last .slide-list")
        if (x.hasClass("in")) {
            $(".last .footer-heading .footer-link").removeClass("minus")
            $(".last .footer-heading .footer-link").addClass("plus")
        }
    });


    // This is To Open search Box
    $(".search .search-icon").click(function() {
        $("body").addClass("overflow");
        $(".overlay-box3").slideDown(300);
    });

    $(".search .search-icon").click(function() {
        $(".search .search-icon").removeClass("open-search")
        $(".search .search-icon").addClass("close-search")
        $(".close-search-btn").fadeIn(500)
        $(".rools .search-box").fadeIn(300);
    });

    $(".close-search-btn,.overlay-box3").click(function() {
        $("body").removeClass("overflow");
        $(".overlay-box3").slideUp(500);
    });

    $(".close-search-btn,.overlay-box3").click(function() {
        $(".search .search-icon").addClass("open-search")
        $(".search .search-icon").removeClass("close-search")
        $(".close-search-btn").fadeOut(300)
        $(".rools .search-box").fadeOut(300);
    });


    $(".cats-list .trips .trips-open-link").click(function() {
        $(".trips-open-link").toggleClass("rotate");
        $(".trips .trips-list").css("transition", "none");
        $(".trips .trips-list").slideToggle(300);
    });

    $(".mo-nav .config-name").click(function() {
        $(".mo-nav .config-name").toggleClass("rotate");
        $(".mo-nav .config-list").slideToggle(300);
    });


    //This is to Open Side Menu in Small Screens
    $(".menu .menu-icon").click(function() {
        $("body").addClass("overflow")
        $(".menu .menu-icon").removeClass("open-menu")
        $(".menu .menu-icon").addClass("close-menu")
        $(".mo-nav").addClass("menu-open");
        $(".overlay-box4").fadeIn(500);
    });

    $(".close,.overlay-box4").click(function() {
        $("body").removeClass("overflow")
        $(".menu .menu-icon").addClass("open-menu")
        $(".menu .menu-icon").removeClass("close-menu")
        $(".mo-nav").removeClass("menu-open");
        $(".overlay-box4").fadeOut(500);
    });
});