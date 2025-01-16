$(document).ready(function () {
    $('#formulario').on('submit', function (e) {
        e.preventDefault(); // Previene el envío estándar del formulario

        // Serializar los datos del formulario
        const datosFormulario = $(this).serialize();

        // Enviar los datos al PHP utilizando $.get
        $.get('verificar.php', datosFormulario, function (respuesta) {
            // Mostrar la respuesta en el contenedor
            $('#resultado').text(respuesta);
        }).fail(function () {
            $('#resultado').text('Error al comunicarse con el servidor.');
        });
    });
});