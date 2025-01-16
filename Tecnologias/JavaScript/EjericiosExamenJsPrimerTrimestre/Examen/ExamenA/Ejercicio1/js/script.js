document.addEventListener("DOMContentLoaded",function () {
    var inputClave = document.createElement("input","text");
    inputClave.id = "clave";

    var form = document.querySelector("form");
    form.appendChild(inputClave);

    var boton = document.getElementById("validar");
    boton.addEventListener('submit',function (event) {
        if (!validarClave()) {
            event.preventDefault();
        }
    
    });
    
    function validarClave() {
        var clave = document.getElementById("clave").value;
        //La clave debe contener letra mayuscula, y 3 numeros ej: A444-valida, a444-invalida.
        var patron = new RegExp("^(?=.*[A-Z])(?=.*[0-9]{3}");
        if (!clave.match(patron)) {
            alert("Calve incorrecta");
            return false;
        } 
        return true;
    }
});