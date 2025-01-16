$(document).ready(function () {
    $('#cargar').on('click', function () {
        // Muestra el logo de carga
        $('#loading').show();
        $('#error').text(''); // Limpia errores anteriores
        $('#contenedor').text(''); // Limpia el contenedor

        // Realiza la solicitud AJAX
        $.ajax({
            url: 'fecha.php', // Archivo PHP que devuelve la fecha
            method: 'GET',
            dataType: 'text'
        })
        .done(function (data) {
            // Oculta el logo de carga y muestra la fecha recibida
            $('#loading').hide();
            $('#contenedor').text(data);
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            // Oculta el logo de carga y muestra el mensaje de error
            $('#loading').hide();
            $('#error').text(`Error: ${jqXHR.status} - ${errorThrown}`);
        });
    });
});