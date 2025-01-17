(function($) {
    // Plugin de mapa interactivo
    $.fn.interactiveMap = function(options) {
        var settings = $.extend({
            center: [51.505, -0.09], // Coordenadas por defecto (Londres)
            zoom: 13, // Nivel de zoom por defecto
            markers: [] // Array de marcadores vacíos por defecto
        }, options);

        return this.each(function() {
            // Crear el mapa en el contenedor
            var map = L.map(this).setView(settings.center, settings.zoom);

            // Cargar el mapa desde OpenStreetMap
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            // Añadir los marcadores proporcionados en la configuración
            settings.markers.forEach(function(markerData) {
                var marker = L.marker([markerData.lat, markerData.lng])
                    .addTo(map)
                    .bindPopup(markerData.popup) // Configurar el popup para el marcador
                    .setTooltip(markerData.title)
                    .openPopup(); // Abrir el popup por defecto si es necesario
            });

            // Aquí puedes añadir más funcionalidades si es necesario
        });
    };
})(jQuery);
