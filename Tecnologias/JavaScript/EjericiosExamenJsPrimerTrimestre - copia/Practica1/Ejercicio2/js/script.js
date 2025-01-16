document.addEventListener("DOMContentLoaded",function () {
    const numeros = [7,8,2,9,10];
    var suma = 0;


    for (let index = 0; index < numeros.length; index++) {
        var numero  = numeros[index];
        if (numero > 8) {
            suma += numero;
        }

    }
    console.log("La suma de los mayores es: " + suma);
});