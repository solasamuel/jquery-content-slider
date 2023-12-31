$(document).ready(function() {

    // set options
    var speed = 500;            // fade speed
    var autoSwitch = true;      // auto slider options
    var autoSwitchSpeed = 4000  // auto slider speed

    // add initiol active class
    $('.slide').first().addClass('active');

    // Hide all slides
    $('.slide').hide();

    // show first slide
    $('.active').show();

    // next handler
    $('#next').on('click', nextSlide)

    // prev handler
    $('#prev').on('click', prevSlide)

    // auto slider handler
    if (autoSwitch == true) {
        setInterval(nextSlide, autoSwitchSpeed);
    }

    // switch to next slide
    function nextSlide() {
        $('.active').removeClass('active').addClass('oldActive');
        if ($('.oldActive').is(':last-child')) {
            $('.slide').first().addClass('active');
        } else {
            $('.oldActive').next().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }

    // switch to prev slide
    function prevSlide(){
        $('.active').removeClass('active').addClass('oldActive');
        if ($('.oldActive').is(':first-child')) {
            $('.slide').last().addClass('active');
        } else {
            $('.oldActive').prev().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }

})