$(document).ready(function () {
    // Escuchar cambios en los botones de tipo radio
    $('input[name="color"]').on('change', function () {
        // Obtener el valor del botón seleccionado
        const colorSeleccionado = $(this).val();
        
        // Cambiar el color de fondo del párrafo
        $('#parrafo').css('background-color', colorSeleccionado);
    });
});