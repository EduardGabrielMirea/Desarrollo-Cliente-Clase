$(document).ready(function () {
    $('#cargar-js').on('click', function () {
        // Realiza la solicitud AJAX para cargar el archivo JS
        $.ajax({
            url: 'prueba.js', // Ruta al archivo JS
            method: 'GET',
            dataType: 'script' // Especifica que el contenido es JavaScript
        })
        .done(function () {
            // El archivo JS se ejecuta automáticamente al ser cargado con dataType 'script'
            console.log('Archivo JS cargado y ejecutado.');
            // Llama a una función del archivo JS
            mostrarMensaje();
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            // Muestra un mensaje de error si no se pudo cargar el archivo
            console.error(`Error al cargar el archivo JS: ${textStatus} - ${errorThrown}`);
            alert(`Error al cargar el archivo JS: ${jqXHR.status} - ${errorThrown}`);
        });
    });
});