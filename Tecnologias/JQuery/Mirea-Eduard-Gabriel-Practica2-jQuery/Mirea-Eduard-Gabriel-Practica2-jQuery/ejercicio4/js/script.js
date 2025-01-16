$(document).ready(function() {
    $('#enviarParametros').on('click', function() {
        // Obtener los valores de los campos del formulario
        const param1 = $('#param1').val();
        const param2 = $('#param2').val();

        // Enviar los parámetros con $.post
        $.post('procesar.php', { param1: param1, param2: param2 }, function(data) {
            // Mostrar el resultado devuelto por el PHP
            $('#resultado').html('<h2>Resultado:</h2>' + data);
        }).fail(function() {
            // Manejo de errores
            $('#resultado').text('Error al enviar los datos.');
        });
    });
});