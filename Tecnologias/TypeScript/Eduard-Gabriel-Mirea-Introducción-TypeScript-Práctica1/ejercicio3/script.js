document.addEventListener("DOMContentLoaded", function () {
    function sumarNumeros() {
        var numero1Input = document.getElementById("numero1");
        var numero2Input = document.getElementById("numero2");
        var resultadoDiv = document.getElementById("resultado");
        if (!numero1Input || !numero2Input || !resultadoDiv) {
            console.error("No se encontraron los elementos requeridos.");
            return;
        }
        var numero1 = parseFloat(numero1Input.value);
        var numero2 = parseFloat(numero2Input.value);
        if (isNaN(numero1) || isNaN(numero2)) {
            alert("Por favor, ingresa dos números válidos.");
            return;
        }
        var suma = numero1 + numero2;
        var resultadoInput = document.createElement("input");
        resultadoInput.type = "text";
        resultadoInput.value = suma.toFixed(2);
        resultadoInput.readOnly = true;
        resultadoDiv.innerHTML = "";
        resultadoDiv.appendChild(resultadoInput);
    }
    var botonCalcular = document.getElementById("calcular-suma");
    botonCalcular === null || botonCalcular === void 0 ? void 0 : botonCalcular.addEventListener("click", sumarNumeros);
});
