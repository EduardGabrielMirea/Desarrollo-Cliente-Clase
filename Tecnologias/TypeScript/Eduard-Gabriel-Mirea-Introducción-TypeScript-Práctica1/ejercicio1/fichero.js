document.addEventListener("DOMContentLoaded",function () {
    // Función para introducir 5 números, calcular su suma y contar cuántos son mayores a 100
    function procesarNumeros() {
        var suma = 0;
        var mayorQueCien = 0;
        for (var i = 0; i < 5; i++) {
            // Solicitar al usuario que ingrese un número
            var numero = parseFloat(prompt("Introduce el n\u00FAmero ".concat(i + 1, ":")));
            // Sumar el número al total
            suma += numero;
            // Verificar si el número es mayor que 100
            if (numero > 100) {
                mayorQueCien++;
            }
        }
        // Mostrar el resultado
        console.log("La suma de los n\u00FAmeros es: ".concat(suma));
        console.log("Cantidad de n\u00FAmeros mayores a 100: ".concat(mayorQueCien));
    }
    // Llamada a la función para ejecutar el programa
    procesarNumeros();
});
