var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}
jQuery("#carousel").owlCarousel({
    autoplay: false,
    rewind: false,
    /* use rewind if you don't want loop */
    margin: 20,
    /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
        0: {
            items: 1
        },

        600: {
            items: 3
        },

        1024: {
            items: 3
        },

        1366: {
            items: 3
        }
    }
});