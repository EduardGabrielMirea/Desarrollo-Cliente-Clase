document.addEventListener("DOMContentLoaded",function () {
    var sumar = document.getElementById("sumar");
    var inicializar = document.getElementById("inicializar");
    var contadorInput = document.getElementById("contador");

    sumar.addEventListener("click",function () {
               var valor = parseInt(contadorInput.value);
               valor+= 10;
               contadorInput.value = valor;
    });

    inicializar.addEventListener("click",function () {
        contadorInput.value = 0;
        });
});