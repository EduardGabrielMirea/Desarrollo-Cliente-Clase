document.addEventListener("DOMContentLoaded", () => {
    function sumarNumeros(): void {
        const numero1Input = document.getElementById("numero1") as HTMLInputElement;
        const numero2Input = document.getElementById("numero2") as HTMLInputElement;
        const resultadoDiv = document.getElementById("resultado");

        if (!numero1Input || !numero2Input || !resultadoDiv) {
            console.error("No se encontraron los elementos requeridos.");
            return;
        }

        const numero1: number = parseFloat(numero1Input.value);
        const numero2: number = parseFloat(numero2Input.value);

        if (isNaN(numero1) || isNaN(numero2)) {
            alert("Por favor, ingresa dos números válidos.");
            return;
        }

        const suma: number = numero1 + numero2;

        const resultadoInput = document.createElement("input");
        resultadoInput.type = "text";
        resultadoInput.value = suma.toFixed(2); 
        resultadoInput.readOnly = true;

        resultadoDiv.innerHTML = ""; 
        resultadoDiv.appendChild(resultadoInput);
    }

    const botonCalcular = document.getElementById("calcular-suma");
    botonCalcular?.addEventListener("click", sumarNumeros);
});
