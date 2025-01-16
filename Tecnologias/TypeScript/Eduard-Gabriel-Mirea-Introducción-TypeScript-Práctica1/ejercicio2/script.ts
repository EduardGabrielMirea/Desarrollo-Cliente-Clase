// Función para calcular el IVA y el precio total
function calcularIVA(): void {
    // Obtener el precio del artículo desde el input
    const precio: number = parseFloat((<HTMLInputElement>document.getElementById("precio")).value);

    // Verificar si el precio es un número válido
    if (isNaN(precio) || precio <= 0) {
        alert("Por favor, ingresa un precio válido.");
        return;
    }

    // Definir el porcentaje de IVA (por ejemplo, 21%)
    const iva: number = 0.21;

    // Calcular el IVA
    const montoIVA: number = precio * iva;

    // Calcular el precio total con el IVA incluido
    let precioTotal: number = precio + montoIVA;

    // Redondear el precio total a 2 decimales
    precioTotal = parseFloat(precioTotal.toFixed(2));

    // Mostrar los resultados
    const resultadoDiv = document.getElementById("resultado");
    if (resultadoDiv) {
        resultadoDiv.innerHTML = 
            `Precio sin IVA: ${precio.toFixed(2)} €<br>` +
            `IVA (21%): ${montoIVA.toFixed(2)} €<br>` +
            `Precio total con IVA: ${precioTotal} €`;
    }
}
