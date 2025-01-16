$(document).ready(function() {
    $('#mostrarFichero').on('click', function() {
        $.ajax({
            url: 'archivo.txt',
            method: 'GET',
            dataType: 'text',
            success: function(data) {
                $('#contenidoFichero').text(data);
            },
            error: function() {
                $('#contenidoFichero').text('Error al cargar el fichero.');
            }
        });
    });
});