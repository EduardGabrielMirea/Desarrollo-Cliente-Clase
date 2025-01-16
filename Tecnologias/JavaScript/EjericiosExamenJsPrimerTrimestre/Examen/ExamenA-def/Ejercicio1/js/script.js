document.addEventListener("DOMContentLoaded", function () {
    var inputClave = document.createElement("input");
    inputClave.id = "clave";
    inputClave.type = "text";
    inputClave.placeholder = "Ingrese clave (ej: A444)";

    var form = document.querySelector("form");
    form.appendChild(inputClave);

    form.addEventListener('submit', function (event) {
        if (!validarClave()) {
            event.preventDefault(); // Evita el envío si la clave es inválida
        }else{
            alert("La clave es correcta");
        }
    });

    function validarClave() {
        var clave = document.getElementById("clave").value;
        var patron = /^[A-Z]\d{3}$/;
        if (!patron.test(clave)) {
            alert("Clave incorrecta. Debe comenzar con una letra mayúscula seguida de tres números.");
            return false;
        }
        return true;
    }
});
