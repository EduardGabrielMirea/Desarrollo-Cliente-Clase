document.addEventListener("DOMContentLoaded",function () {
   var mostIva = document.getElementById("most-iva");
   var mostTotal = document.getElementById("most-total");

   
   var precio = parseFloat(prompt("Introduce un precio: "));
    
   function calcularIva(precio) {
        return (precio * 21) / 100;
    }
    var iva = calcularIva(precio);
    var total = precio + iva;

    mostIva.textContent = `El iva es ${iva}`;
    mostTotal.textContent = `El total con iva es ${total.toFixed(2)}`;

});