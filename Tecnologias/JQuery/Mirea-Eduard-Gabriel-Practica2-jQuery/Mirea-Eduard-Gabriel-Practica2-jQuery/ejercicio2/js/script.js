$(document).ready(function() {
    $('#cargarPagina').on('click', function() {
        $('#contenidoPagina').load('otraPagina.html', function(response, status, xhr) {
            if (status === "error") {
                $('#contenidoPagina').text('Error al cargar la página: ' + xhr.status + " " + xhr.statusText);
            }
        });
    });
});