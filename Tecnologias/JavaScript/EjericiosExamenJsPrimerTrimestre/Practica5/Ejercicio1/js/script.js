document.addEventListener('DOMContentLoaded', function() {
    // Foco automático en el campo "nombre"
    var nombre = document.getElementById("nombre");
    nombre.focus();



    // Manejador del formulario
    document.getElementById('miFormulario').addEventListener('submit', function(event) {
        if (!validarFormulario()) {
            event.preventDefault(); // Detiene el envío si el formulario no es válido
        }
    });

    // Manejador de cambio en la lista de aficiones
    document.getElementById('aficiones').addEventListener('change', mostrarInfoAficion);
});

function mostrarInfoAficion() {
    var lista = document.getElementById("aficiones");
    var indiceSeleccionado = lista.selectedIndex;
    var valorSeleccionado = lista.options[indiceSeleccionado].value;
    var longitudLista = lista.length;

    alert("La longitud de la lista es " + longitudLista +
        "\nEl índice seleccionado es el " + indiceSeleccionado +
        "\nEl valor del índice seleccionado es " + valorSeleccionado);
}

function validarFormulario() {
    var dni = document.getElementById("dni").value;
    var telefono = document.getElementById("telefono").value;

    // Validación del DNI
    if (dni.trim() === "") {
        alert("El campo DNI es obligatorio.");
        return false;
    }

    // Validación del teléfono (9 dígitos consecutivos)
    var regexTelefono = /^[0-9]{9}$/;
    if (!regexTelefono.test(telefono)) {
        alert("El número de teléfono debe tener 9 dígitos consecutivos.");
        return false;
    }

    return true; // Si todo es válido
}