//Introduce la cadena.
const cadena = prompt("Introduce una cadena: ");
alert("La cadena es: "+cadena);

//Longitud de la cadena.
var longitud = cadena.length;
alert("La longitud de la cadena es "+longitud+" carácteres.");

//Pasarla a mayusculas.
var cadenaMayuscula =  cadena.toUpperCase();
alert("La cadena en mayuscula es " +cadenaMayuscula);

//Pasarla a minusculas.
var cadenaMinusculas = cadena.toLowerCase();
alert("La cadena en minusculas es "+cadenaMinusculas);

//Mostrar cada palabra de la cadena por separado, primero normal
//luego al revés.
function separar(cadena) {
    var separarCadena = cadena.split(" ");
    var palabra = " ";
    for (let index = 0; index < separarCadena.length; index++) {
        palabra += separarCadena[index] + "\n";
        //palabrasReves += separarCadena[index].split("").reverse().join("") + "\n";
         
    }
    return palabra;
}

const separado = separar(cadena);
// Mostramos las palabras normales
alert("La cadena por separado (normal):\n" + separado);
function separarAlReves(cadena) {
    var separarCadena = cadena.split(" ").reverse();
    var palabraReves = "";  // Elimina el espacio inicial
    for (let index = 0; index < separarCadena.length; index++) {
        palabraReves += separarCadena[index] + "\n";
    }
    return palabraReves;
}

// Define la cadena a invertir
const separadoReves = separarAlReves(cadena);

// Corrige el uso de separadoReves en el alert
alert("La cadena por separado (reves):\n" + separadoReves);