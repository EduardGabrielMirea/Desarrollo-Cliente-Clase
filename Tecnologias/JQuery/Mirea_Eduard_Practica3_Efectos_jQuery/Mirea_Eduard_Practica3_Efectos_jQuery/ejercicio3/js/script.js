$(document).ready(function() {
    let isAnimating = false;

    function startAnimation() {
        if (isAnimating) return;
        isAnimating = true;

        $('#cube').queue('fx', function(next) {
            $(this).animate({ left: '75%' }, 1000);
            next();
        }).delay(500).queue('fx', function(next) {
            $(this).css('background-color', 'blue');
            next();
        }).delay(500).queue('fx', function(next) {
            $(this).animate({ top: '75%' }, 1000);
            next();
        }).delay(500).queue('fx', function(next) {
            $(this).animate({ left: '50%' }, 1000);
            next();
        }).delay(500).queue('fx', function(next) {
            $(this).animate({ top: '20%' }, 1000);
            isAnimating = false; 
            next();
        }).delay(500);
    }

    function stopAnimation() {
        $('#cube').stop(true, true);
        isAnimating = false;
    }

    $('#start-effect').click(function() {
        startAnimation();
    });

    $('#stop-effect').click(function() {
        stopAnimation();
    });
});