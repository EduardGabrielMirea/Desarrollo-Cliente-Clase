document.addEventListener("DOMContentLoaded", function () {
    function procesarNumeros() {
        var suma = 0;
        var mayorQueCien = 0;
        for (var i = 0; i < 5; i++) {
            var input = prompt("Introduce el n\u00FAmero ".concat(i + 1, ":"));
            var numero = parseFloat(input);
            if (isNaN(numero)) {
                alert("Por favor, introduce un número válido.");
                i--; 
                continue;
            }
            suma += numero;
            if (numero > 100) {
                mayorQueCien++;
            }
        }
        var resultadoDiv = document.getElementById("resultado");
        if (resultadoDiv) {
            resultadoDiv.innerHTML = "\n                <p>La suma de los n\u00FAmeros es: <strong>".concat(suma, "</strong></p>\n                <p>Cantidad de n\u00FAmeros mayores a 100: <strong>").concat(mayorQueCien, "</strong></p>\n            ");
        }
        console.log("La suma de los n\u00FAmeros es: ".concat(suma));
        console.log("Cantidad de n\u00FAmeros mayores a 100: ".concat(mayorQueCien));
    }
    var boton = document.getElementById("procesar-numeros");
    boton === null || boton === void 0 ? void 0 : boton.addEventListener("click", procesarNumeros);
});
