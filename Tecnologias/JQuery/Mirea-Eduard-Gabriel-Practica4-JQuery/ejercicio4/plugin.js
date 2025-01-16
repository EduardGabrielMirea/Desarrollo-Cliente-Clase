(function($) {
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
