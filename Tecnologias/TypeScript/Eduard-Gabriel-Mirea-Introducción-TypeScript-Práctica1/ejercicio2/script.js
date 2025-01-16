// Función para calcular el IVA y el precio total
function calcularIVA() {
    // Obtener el precio del artículo desde el input
    var precio = parseFloat(document.getElementById("precio").value);
    // Verificar si el precio es un número válido
    if (isNaN(precio) || precio <= 0) {
        alert("Por favor, ingresa un precio válido.");
        return;
    }
    // Definir el porcentaje de IVA (por ejemplo, 21%)
    var iva = 0.21;
    // Calcular el IVA
    var montoIVA = precio * iva;
    // Calcular el precio total con el IVA incluido
    var precioTotal = precio + montoIVA;
    // Redondear el precio total a 2 decimales
    precioTotal = parseFloat(precioTotal.toFixed(2));
    // Mostrar los resultados
    var resultadoDiv = document.getElementById("resultado");
    if (resultadoDiv) {
        resultadoDiv.innerHTML =
            "Precio sin IVA: ".concat(precio.toFixed(2), " \u20AC<br>") +
                "IVA (21%): ".concat(montoIVA.toFixed(2), " \u20AC<br>") +
                "Precio total con IVA: ".concat(precioTotal, " \u20AC");
    }
}
