document.addEventListener("DOMContentLoaded", function () {
   var mostrar = document.getElementById("mostrar");
   var cadena = prompt("Introduce cadena");

   var longitud = cadena.length + "<br>";
   var mayusculas = cadena.toUpperCase() + "<br>";
   var minusculas = cadena.toLowerCase() + "<br>";

   function separar(cadena) {
        var cadenaSeparada = cadena.split(" ");
        var palabra = "";
            for (let index = 0; index < cadenaSeparada.length; index++) {
                palabra += cadenaSeparada[index] + "<br>";
            }
      return palabra;      
    }
    var cadenaNormal = separar(cadena);

    function reves(cadena) {
        var cadenaReves = cadena.split(" ").reverse();
        var palabra = "";
            for (let index = 0; index < cadenaReves.length; index++) {
                palabra += cadenaReves[index] + "<br>";
            }
    return palabra;
    }
    var cadenaReves = reves(cadena);

   mostrar.innerHTML = `
   La longitud de la cadena es ${longitud}
   La cadena en mayúsculas es ${mayusculas}
   La cadena en minusculas es ${minusculas}
   La cadena normal es  ${cadenaNormal}
   La cadena reves es ${cadenaReves}
   `;
});