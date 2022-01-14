(function($) {
    'use strict';
    $(window).load(function() {
    /* PreLoader */
        $('.status').fadeOut();
        $('.preloader').delay(350).fadeOut('slow');
    });
    /* Backstretch */
    // $.backstretch('assets/images/background/home.png');
    /* Animation Backstretch On Page Load */
    $(window).scrollTop() > $(window).height() ? $(".backstretch").fadeOut("slow") : $(".backstretch").fadeIn("slow");
    /* Animation Navbar On Page Load */
    $(window).scrollTop() > $(window).height() - 80 ? $(".navbar").addClass("scroll") : $(".navbar").removeClass("scroll");
    $(window).on("scroll", function() {
        var a = $(this).scrollTop();
        $(".header .container-fluid").css({
            "opacity": 1 - a / 400
        });
        /* Animation Background Section About On Page Scroll */
        $("section.about").css({
            "background-color": "rgba(255, 255, 255, 0" + a / 200 + ")"
        });
        /* Animation Backstretch On Page Scroll */
        $(window).scrollTop() > $(window).height() ? $(".backstretch").fadeOut("slow") : $(".backstretch").fadeIn("slow");
        /* Animation Navbar On Page Scroll */
        $(window).scrollTop() > $(window).height() - 500 ? $(".navbar").addClass("scroll") : $(".navbar").removeClass("scroll");
    });
    /* ScrollTop */
    $('.nav > li > a, a.navbar-brand').on('click', function(event) {
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    /* scrollspy highlighting active navbar menu */
    $('body').scrollspy({
        target: '.navbar-fixed-top'
    })
    $(".description .sub").typed({
        strings: ["Fullstack Developer Specializing in Javascript", "Fullstack Developer Specializing in Javascript"],
        typeSpeed: 1,
        backSpeed: 1,
        backDelay: 1400,
        loop: true
    });
})(jQuery);