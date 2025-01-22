document.addEventListener("DOMContentLoaded", function () {
    const xhr = new XMLHttpRequest();
    const form = document.querySelector("form");
    const obtenerUsuarios = document.getElementById("obtenUsuarios");
    const filePhp = 'archivo.php';
    const listaUsuarios = document.getElementById("listaUsuarios");

    // Manejar el evento de enviar el formulario mediante AJAX
    form.addEventListener("submit", function (event) {
        event.preventDefault();  // Evitar el envío tradicional del formulario

        // Obtener los valores del formulario
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;

        // Enviar los datos al servidor utilizando AJAX
        xhr.open("GET", filePhp + "?name=" + encodeURIComponent(nombre) + "&lastName=" + encodeURIComponent(apellido), true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // Mostrar la respuesta después de agregar el usuario
                alert(xhr.responseText);  // Aquí muestra el mensaje de respuesta
            }
        };
        xhr.send();
    });

    // Cargar los usuarios desde la base de datos
    obtenerUsuarios.addEventListener("click", function (event) {
        event.preventDefault();  // Prevenir que se recargue la página

        xhr.open("GET", filePhp, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                listaUsuarios.innerHTML = xhr.responseText;
            }
        };
        xhr.send();
    });
});
