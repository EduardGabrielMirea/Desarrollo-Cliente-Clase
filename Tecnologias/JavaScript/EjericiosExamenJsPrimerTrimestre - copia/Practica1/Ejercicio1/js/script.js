document.addEventListener("DOMContentLoaded",function () {
    
    var numeros = [];
     
    for (let index = 0; index < 5; index++) {
        var numero = parseInt(prompt("Introduce 5 numeros enteros."));
        numeros.push(numero);
    }
    console.log("los numeros introducidos son: " + numeros);

    var suma = 0;
    var mayores = 0;

    for (let index = 0; index < numeros.length; index++) {
        var numero = numeros[index];
        suma += numero;
        if (numero > 100) {
            mayores++;
        }
    }

    console.log("La suma de los numeros es: " + suma);
    console.log("Hay " + mayores + " numeros mayores que 100");
});