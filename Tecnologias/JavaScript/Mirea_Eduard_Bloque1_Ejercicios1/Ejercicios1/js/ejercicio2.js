const numeros = [7, 8, 2, 9, 10];
let suma = 0;

for (let index = 0; index < numeros.length; index++) {
    const numero = numeros[index];
    if (numero > 8) {
        suma += numero; 
    }
}

alert("La suma de los números mayores de 8 es: " + suma);
