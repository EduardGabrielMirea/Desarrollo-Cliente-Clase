document.addEventListener("DOMContentLoaded", function () {
    function calcularIVA() {
        var precioInput = document.getElementById("precio");
        var resultadoDiv = document.getElementById("resultado");
        if (!precioInput || !resultadoDiv) {
            console.error("No se encontraron los elementos requeridos.");
            return;
        }
        var precio = parseFloat(precioInput.value);
        if (isNaN(precio) || precio <= 0) {
            alert("Por favor, ingresa un precio válido.");
            return;
        }
        var iva = 0.21;
        var montoIVA = precio * iva;
        var precioTotal = parseFloat((precio + montoIVA).toFixed(2));
        resultadoDiv.innerHTML = "\n            <p>Precio sin IVA: <strong>".concat(precio.toFixed(2), " \u20AC</strong></p>\n            <p>IVA (21%): <strong>").concat(montoIVA.toFixed(2), " \u20AC</strong></p>\n            <p>Precio total con IVA: <strong>").concat(precioTotal, " \u20AC</strong></p>\n        ");
    }
    var botonCalcular = document.getElementById("calcular-iva");
    botonCalcular === null || botonCalcular === void 0 ? void 0 : botonCalcular.addEventListener("click", calcularIVA);
});
