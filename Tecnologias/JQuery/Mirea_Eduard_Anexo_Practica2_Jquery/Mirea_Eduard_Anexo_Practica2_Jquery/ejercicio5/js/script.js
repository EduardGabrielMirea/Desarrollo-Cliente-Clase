$(document).ready(function () {
    $('#cargar-paises').on('click', function () {
        // URL de la API para obtener países de Europa
        const apiURL = 'https://restcountries.com/v3.1/region/europe';

        // Realizar la solicitud AJAX con getJSON
        $.getJSON(apiURL, function (data) {
            // Limpiar la lista antes de agregar los países
            $('#lista-paises').empty();

            // Recorrer los datos y agregar los países a la lista
            data.forEach(function (pais) {
                const nombre = pais.name.common;
                const capital = pais.capital ? pais.capital[0] : 'Sin capital';
                $('#lista-paises').append(`<li>${nombre} - Capital: ${capital}</li>`);
            });
        }).fail(function () {
            // Mostrar un mensaje en caso de error
            $('#lista-paises').html('<li style="color: red;">Error al cargar los datos. Inténtalo de nuevo.</li>');
        });
    });
});