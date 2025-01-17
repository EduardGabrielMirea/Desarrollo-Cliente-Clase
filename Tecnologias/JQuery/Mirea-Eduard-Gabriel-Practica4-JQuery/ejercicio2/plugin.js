(function ($) {
    $.fn.derecha = function () {
        return new Promise((resolve) => {
           this.animate({ left: '50px' }, 250, resolve);
        });
        
    };
    
    $.fn.izquierda = function () {
        return new Promise((resolve) => {
            this.animate({ left: '-50px' }, 250, resolve);
        });
        
    };
    
    $.fn.reset = function () {
        return new Promise((resolve) => {
            this.animate({left: '0px'}, 250, resolve);
        });  
    
    };
    
    $.fn.movDerIzq = function () {
        return this.derecha().then(() => this.izquierda().then(() => this.reset())); 
    };
})(jQuery);

$(document).ready(function () {
    $('#mover').click(function () {
        $('#texto').movDerIzq();
    });
});