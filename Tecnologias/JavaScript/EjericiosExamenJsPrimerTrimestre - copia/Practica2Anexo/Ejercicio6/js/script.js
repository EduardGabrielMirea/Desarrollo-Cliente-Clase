document.addEventListener("DOMContentLoaded",function () {
    var cadena = document.getElementById("texto").textContent;
    var resultado = document.getElementById("resultado");

   resultado.textContent = eval(cadena);

});