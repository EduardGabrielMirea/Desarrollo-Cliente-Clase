document.addEventListener("DOMContentLoaded", function () {
  var mensaje = document.getElementById("mensaje");

  var numero = prompt("Introduce un numero entero: ");

  if (parseInt(numero) % 2 === 0) {
    mensaje.textContent = `El número ${numero} es par`;
  } else {
    mensaje.textContent = `El número ${numero} es impar`;
  }

});