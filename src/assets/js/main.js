(function($) {

    window.onload = () => {
        setTimeout(() => {
            $('#preloader').addClass('preloader--fade');
        }, 150);
        setTimeout(() => {
            $('#preloader').addClass('preloader--hidden');
        }, 1100);
        setTimeout(() => {
            $('#topbar, #header, #main, #footer').removeClass('hidden');
        }, 1000);
    };

    window.onscroll = $.horizontalScrollProgress;

    let config = {};

    config.carouselTestimonial = {
        loop: true,
        margin: 10,
        dotsEach: true,
        paginationSpeed: 300,
        rewindSpeed: 400,
        autoplay: true,
        autoplaySpeed: 900,
        autoplayTimeout: 2000,
        autoplayHoverPause: false,
        items: 1
    }

    config.carouselBlog = {
        loop: true,
        autoWidth:true,
        dotsEach: true,
        paginationSpeed: 300,
        rewindSpeed: 400,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        responsiveClass:true,
        responsive: {
            0: {
                center: true,
                margin: 15,
            },

            768: {
                center: true,
                margin: 20,
            },

            992: {
                center: false,
                margin: 25,          
            }
        }
    }

    config.featureSlider = {
        direction: 'down',
        keys: {},
        swipe: false,
        nav: false,
        loop: true
    }

    config.lazyMemberSection = {
        appendScroll: $('.member-wrap'),
        effect: 'fadeIn',
        effectTime: 700,
        threshold: 0
    }

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 10);
    });

    $.addToTopBtn();

    $('.lazy').lazy();
    $('.member__img .lazy').lazy(config.lazyMemberSection);

    $('.carousel-testimonial').owlCarousel(config.carouselTestimonial);
    $('.carousel-blog').owlCarousel(config.carouselBlog);

    $('#topbar').changeNavStyle();

    const featureSlider = $('#slider-feature').cardslider(config.featureSlider).data('cardslider');
    $(".slideshow__btn--next").click(() => {
        featureSlider.nextCard();
    });
    $(".slideshow__btn--prev").click(() => {
        featureSlider.prevCard();
    });

    $('.logo-wrap').hover(function () {
        $(this).find(' h1.heading-primary').toggleClass('typewriter');
        $(this).find(' .logo').toggleClass('spin');
    });

})(jQuery);