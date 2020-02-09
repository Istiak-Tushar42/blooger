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
    navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')]
})