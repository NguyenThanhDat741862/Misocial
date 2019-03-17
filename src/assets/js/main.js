(function($) {
    let carouselTestimonialConfig,
        carouselBlogConfig;

    carouselTestimonialConfig = {
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

    carouselBlogConfig = {
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

    $('.carousel-testimonial').owlCarousel(carouselTestimonialConfig);
    $('.carousel-blog').owlCarousel(carouselBlogConfig);

    $('#topbar').changeNavStyle();

})(jQuery);