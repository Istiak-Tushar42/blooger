const responsive = {
    0: {
        items: 1
    },

    320: {
        items: 1
    },

    560: {
        items: 2
    },

    960: {
        items: 3
    },

    

}

$(document).ready(function(){
    // STICKY NAV
    $(window).on('scroll', function() {
        if($(window).scrollTop()) {
            $('.navbar').addClass('sticky');
        } else {
            $('navbar').removeClass('sticky');
        }
    });

    // OWL-CAROUSEL
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });

    // CLICK TO SCROLL TOP
    // $('.move-up span').click(function(e) {
    //     $('html, body').animate({
    //         scrollTop: 0
    //     }, 1000);

    //     e.prevenDefault();
    // });


    
    // AOS INSTANCE
    AOS.init();
})
