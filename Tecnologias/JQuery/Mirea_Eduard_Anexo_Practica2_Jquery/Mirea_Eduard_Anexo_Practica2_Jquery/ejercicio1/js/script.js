$(document).ready(function () {
    // Realizar la solicitud AJAX
    $.ajax({
        url: 'fichero.txt', // Ruta al fichero de texto
        method: 'GET',
        dataType: 'text' // Tipo de dato esperado
    })
    .done(function (data) {
        // Si la transferencia es exitosa, coloca el contenido en el contenedor
        $('#contenedor').text(data);
        $('#error').text(''); // Limpia cualquier mensaje de error
    })
    .fail(function () {
        // Si hay un error en la transferencia, muestra un mensaje de error
        $('#error').text('Error: No se pudo cargar el fichero de texto.');
    });
});