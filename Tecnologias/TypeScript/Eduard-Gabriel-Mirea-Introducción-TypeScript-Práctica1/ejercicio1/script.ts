document.addEventListener("DOMContentLoaded", () => {
    function procesarNumeros(): void {
        let suma: number = 0;
        let mayorQueCien: number = 0;

        for (let i = 0; i < 5; i++) {
            const input = prompt(`Introduce el número ${i + 1}:`);
            const numero: number = parseFloat(input!);

            if (isNaN(numero)) {
                alert("Por favor, introduce un número válido.");
                i--;
                continue;
            }

            suma += numero;

            if (numero > 100) {
                mayorQueCien++;
            }
        }

        const resultadoDiv = document.getElementById("resultado");
        if (resultadoDiv) {
            resultadoDiv.innerHTML = `
                <p>La suma de los números es: <strong>${suma}</strong></p>
                <p>Cantidad de números mayores a 100: <strong>${mayorQueCien}</strong></p>
            `;
        }

        console.log(`La suma de los números es: ${suma}`);
        console.log(`Cantidad de números mayores a 100: ${mayorQueCien}`);
    }

    const boton = document.getElementById("procesar-numeros");
    boton?.addEventListener("click", procesarNumeros);
});
