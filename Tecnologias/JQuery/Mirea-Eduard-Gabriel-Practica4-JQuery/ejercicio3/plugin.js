(function ($) {
    // Configuración por defecto
    const defaultSettings = {
        left: {
            distance: '50px', // Distancia para el movimiento horizontal
            duration: 250     // Duración de la animación horizontal
        },
        top: {
            distance: '50px', // Distancia para el movimiento vertical
            duration: 250     // Duración de la animación vertical
        },
        reset: {
            duration: 250     // Duración de la animación para volver al centro
        }
    };

    $.fn.derecha = function (options) {
        const settings = $.extend(true, {}, defaultSettings, options);
        return new Promise((resolve) => {
            this.animate({ left: settings.left.distance }, settings.left.duration, resolve);
        });
    };

    $.fn.izquierda = function (options) {
        const settings = $.extend(true, {}, defaultSettings, options);
        return new Promise((resolve) => {
            this.animate({ left: `-${settings.left.distance}` }, settings.left.duration, resolve);
        });
    };

    $.fn.arriba = function (options) {
        const settings = $.extend(true, {}, defaultSettings, options);
        return new Promise((resolve) => {
            this.animate({ top: `-${settings.top.distance}` }, settings.top.duration, resolve);
        });
    };

    $.fn.abajo = function (options) {
        const settings = $.extend(true, {}, defaultSettings, options);
        return new Promise((resolve) => {
            this.animate({ top: settings.top.distance }, settings.top.duration, resolve);
        });
    };

    $.fn.reset = function (options) {
        const settings = $.extend(true, {}, defaultSettings, options);
        return new Promise((resolve) => {
            this.animate({ left: '0px', top: '0px' }, settings.reset.duration, resolve);
        });
    };

    $.fn.movDerIzq = function (options) {
        return this.derecha(options)
            .then(() => this.izquierda(options))
            .then(() => this.reset(options));
    };

    $.fn.movArribaAbajo = function (options) {
        return this.arriba(options)
            .then(() => this.abajo(options))
            .then(() => this.reset(options));
    };

})(jQuery);

$(document).ready(function () {
    $('#moverHorizontal').click(function () {
        $('#texto').movDerIzq({
            left: { distance: '100px', duration: 300 }, // Personalizar distancia y duración
            reset: { duration: 200 }
        });
    });

    $('#moverVertical').click(function () {
        $('#texto').movArribaAbajo({
            top: { distance: '100px', duration: 300 }, // Personalizar distancia y duración
            reset: { duration: 200 }
        });
    });
});
