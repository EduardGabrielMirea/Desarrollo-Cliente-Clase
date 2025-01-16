$(document).ready(function() {

    $('#btn-hide').click(function() {
        $('#image').hide();
    });

    $('#btn-show').click(function() {
        $('#image').show();
    });

    $('#btn-toggle').click(function() {
        $('#image').toggle();
    });

    $('#btn-fade-in').click(function() {
        $('#image').fadeIn();
    });

    $('#btn-fade-out').click(function() {
        $('#image').fadeOut();
    });

    $('#btn-fade-toggle').click(function() {
        $('#image').fadeToggle();
    });

    $('#btn-slide-up').click(function() {
        $('#image').slideUp();
    });

    $('#btn-slide-down').click(function() {
        $('#image').slideDown();
    });

    $('#btn-slide-toggle').click(function() {
        $('#image').slideToggle();
    });

    $('#btn-animate').click(function() {
        $('#image').animate({
            width: '150px',
            opacity: 0.5
        }, 1000, function() {
            // Callback 
            $(this).animate({
                width: '300px',
                opacity: 1
            }, 1000);
        });
    });
});