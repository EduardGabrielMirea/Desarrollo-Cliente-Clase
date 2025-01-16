$(document).ready(function() {
    $('#mostrarXML').on('click', function() {
        $.get('fichero.xml', function(data) {
            let contenido = '<h2>Contenido del fichero XML:</h2>';
            
            // Recorremos el archivo XML y extraemos información
            $(data).find('item').each(function() {
                const titulo = $(this).find('titulo').text();
                const descripcion = $(this).find('descripcion').text();

                contenido += `
                    <div style="margin-bottom: 10px;">
                        <strong>Título:</strong> ${titulo}<br>
                        <strong>Descripción:</strong> ${descripcion}
                    </div>`;
            });

            // Mostrar el contenido en el div
            $('#contenidoXML').html(contenido);
        }).fail(function() {
            $('#contenidoXML').text('Error al cargar el fichero XML.');
        });
    });
});