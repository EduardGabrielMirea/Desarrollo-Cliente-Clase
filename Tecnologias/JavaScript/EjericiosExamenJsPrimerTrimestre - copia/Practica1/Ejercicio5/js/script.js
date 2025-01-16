document.addEventListener("DOMContentLoaded",function () {
    var mostIva = document.getElementById("most-iva");
    var mostTotal = document.getElementById("most-total");

    var precio = parseFloat(prompt("Introduce un precio: "));

    function calcIva(precio) {
        var iva = (precio * 21) / 100;
        return iva;
    }
    var iva = calcIva(precio);
    mostIva.textContent = `El iva es ${iva}`;

    function total(precio,iva) {
        return  precio + iva;
    }
    var totalPrecio = total(precio,iva);
    mostTotal.textContent = `El precio total es ${totalPrecio.toFixed(2)}`;
});