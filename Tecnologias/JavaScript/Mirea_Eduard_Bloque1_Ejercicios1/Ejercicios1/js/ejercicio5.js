const precioSinIva = prompt("Introduce el precio del artículo: ");

function calcularIva(precioSinIva) {
    var impuesto = 21;
    var iva = (precioSinIva*(impuesto/100));
    return iva;
}
const iva = calcularIva(parseFloat(precioSinIva));
alert("El iva es: " + iva);

function calcularPrecioTotal(precioSinIva, iva) {
    var precioTotal = precioSinIva + iva;
    return precioTotal;
}
const precioTotal = calcularPrecioTotal(parseFloat(precioSinIva),parseFloat(iva));
alert("El precio total es: " + Number.parseFloat(precioTotal).toFixed(2));    