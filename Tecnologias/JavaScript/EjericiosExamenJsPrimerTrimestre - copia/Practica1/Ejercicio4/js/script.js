document.addEventListener("DOMContentLoaded", function () {
  var numero = parseInt(prompt("Introduce un numero entero: "));

  if (numero % 2 === 0) {
    alert("El numero es par");
  }else{
    alert("El numero es  impar");
  }
});