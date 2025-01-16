document.addEventListener("DOMContentLoaded", function () {
    // Obtener todos los botones de radio con el nombre "color"
    const radios = document.querySelectorAll('input[name="color"]');

    // Escuchar cambios en cada botón de radio
    radios.forEach(function(radio) {
        radio.addEventListener('change', function() {
            cambiarColor(); // Llamar a la función de cambio de color
        });
    });
    
    // Función para cambiar el color del párrafo
    function cambiarColor() {
        const parrafo = document.getElementById('parrafo');
        const colorSeleccionado = document.querySelector('input[name="color"]:checked').value;

        // Aplicar el color seleccionado
        if (colorSeleccionado === 'verde') {
            parrafo.style.color = 'green';
        } else if (colorSeleccionado === 'azul') {
            parrafo.style.color = 'blue';
        } else if (colorSeleccionado === 'rojo') {
            parrafo.style.color = 'red';
        }
    }
});