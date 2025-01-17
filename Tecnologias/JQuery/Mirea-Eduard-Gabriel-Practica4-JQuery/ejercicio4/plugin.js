(function ($) {
    $.fn.imageGallery = function(options) {
        // Establecer las opciones predeterminadas
        var settings = $.extend({
            transitionTime: 300, // Tiempo de transición predeterminado
            showControls: true,  // Predeterminado a mostrar controles
            imageWidth: 600      // Ancho de las imágenes
        }, options);
    
        return this.each(function() {
            var $gallery = $(this);
            var $images = $gallery.find('img');
            var currentIndex = 0;
    
            // Configurar el tamaño de las imágenes según la opción imageWidth
            $images.css('width', settings.imageWidth);
    
            // Función para mostrar una imagen
            function showImage(index) {
                $images.fadeOut(settings.transitionTime); // Desaparece la imagen actual
                $($images[index]).fadeIn(settings.transitionTime); // Muestra la nueva imagen
            }
    
            // Mostrar la primera imagen
            showImage(currentIndex);
    
            // Configurar los controles de navegación
            if (settings.showControls) {
                $gallery.find('.controls').show(); 
    
                var $prevButton = $gallery.find('.prev');
                var $nextButton = $gallery.find('.next');
    
                $prevButton.on('click', function() {
                    currentIndex = (currentIndex > 0) ? currentIndex - 1 : $images.length - 1;
                    showImage(currentIndex);
                });
    
                $nextButton.on('click', function() {
                    currentIndex = (currentIndex < $images.length - 1) ? currentIndex + 1 : 0;
                    showImage(currentIndex);
                });
            } else {
                // Ocultar los controles si showControls es false
                $gallery.find('.controls').hide();
            }
        });
    };
})(jQuery);

$(document).ready(function() {
    // Inicialización de la galería con valores predeterminados
    var gallery = $('.gallery').imageGallery({
        transitionTime: 500, // Tiempo de transición predeterminado
        showControls: true,  // Mostrar controles por defecto
        imageWidth: 600      // Ancho de las imágenes predeterminado
    });

    // Función para aplicar la configuración de la galería según los campos de entrada
    $('#apply-settings').click(function() {
        var transitionTime = $('#transition-time').val();
        var imageWidth = $('#image-width').val();
        var showControls = $('#show-controls').is(':checked');

        // Aplicar la nueva configuración
        gallery.imageGallery({
            transitionTime: parseInt(transitionTime), // Convertir el valor a entero
            imageWidth: parseInt(imageWidth), // Convertir el valor a entero
            showControls: showControls // Usar el valor booleano
        });
    });
});
