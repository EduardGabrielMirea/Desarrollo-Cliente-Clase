// Función para introducir 5 números, calcular su suma y contar cuántos son mayores a 100
function procesarNumeros(): void {
    let suma: number = 0;
    let mayorQueCien: number = 0;

    for (let i = 0; i < 5; i++) {
        // Solicitar al usuario que ingrese un número
        let numero: number = parseFloat(prompt(`Introduce el número ${i + 1}:`)!);

        // Sumar el número al total
        suma += numero;

        // Verificar si el número es mayor que 100
        if (numero > 100) {
            mayorQueCien++;
        }
    }

    // Mostrar el resultado
    console.log(`La suma de los números es: ${suma}`);
    console.log(`Cantidad de números mayores a 100: ${mayorQueCien}`);
}

// Llamada a la función para ejecutar el programa
procesarNumeros();
