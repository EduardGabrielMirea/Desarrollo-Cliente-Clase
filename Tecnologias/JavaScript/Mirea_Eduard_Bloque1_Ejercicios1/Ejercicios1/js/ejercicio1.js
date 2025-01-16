/*
Introducir 5 números. Calcular la suma de todos ellos.
Decir cuántos de ellos son mayores de 100.
*/

const numeros = [1, 50, 100, 200, 20, 300];
let mayores = 0; 
let suma = 0;

for (let index = 0; index < numeros.length; index++) {
    const numero = numeros[index];
    suma += numero; 
    if (numero > 100) {
        mayores++;
    }
}

alert("La suma de los números es: " + suma);
alert("Los números mayores de 100 son: " + mayores);
