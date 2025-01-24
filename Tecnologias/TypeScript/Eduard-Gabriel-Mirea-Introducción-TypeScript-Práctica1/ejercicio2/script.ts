document.addEventListener("DOMContentLoaded", () => {
    function calcularIVA(): void {
        const precioInput = document.getElementById("precio") as HTMLInputElement;
        const resultadoDiv = document.getElementById("resultado");

        if (!precioInput || !resultadoDiv) {
            console.error("No se encontraron los elementos requeridos.");
            return;
        }

        const precio: number = parseFloat(precioInput.value);

        if (isNaN(precio) || precio <= 0) {
            alert("Por favor, ingresa un precio válido.");
            return;
        }

        const iva: number = 0.21;
        const montoIVA: number = precio * iva;
        const precioTotal: number = parseFloat((precio + montoIVA).toFixed(2));

        resultadoDiv.innerHTML = `
            <p>Precio sin IVA: <strong>${precio.toFixed(2)} €</strong></p>
            <p>IVA (21%): <strong>${montoIVA.toFixed(2)} €</strong></p>
            <p>Precio total con IVA: <strong>${precioTotal} €</strong></p>
        `;
    }

    const botonCalcular = document.getElementById("calcular-iva");
    botonCalcular?.addEventListener("click", calcularIVA);
});
