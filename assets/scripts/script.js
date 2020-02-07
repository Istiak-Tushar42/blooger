// STICKY NAV
$(window).on('scroll', function() {
    if($(window).scrollTop()) {
        $('.navbar').addClass('sticky');
    } else {
        $('navbar').removeClass('sticky');
    }
});