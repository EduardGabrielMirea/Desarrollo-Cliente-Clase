// Función para calcular la suma de dos números y mostrar el resultado en un campo de texto creado dinámicamente
function sumarNumeros(): void {
    // Obtener los valores de los campos de texto
    const numero1: number = parseFloat((<HTMLInputElement>document.getElementById("numero1")).value);
    const numero2: number = parseFloat((<HTMLInputElement>document.getElementById("numero2")).value);

    // Verificar si ambos números son válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingresa dos números válidos.");
        return;
    }

    // Calcular la suma
    const suma: number = numero1 + numero2;

    // Crear dinámicamente un campo de texto para mostrar el resultado
    const resultadoDiv = <HTMLDivElement>document.getElementById("resultado");
    const resultadoInput = document.createElement("input");
    resultadoInput.type = "text";
    resultadoInput.value = suma.toFixed(2); // Mostrar la suma con dos decimales
    resultadoInput.readOnly = true; // Hacer que el campo sea solo lectura

    // Limpiar el contenido previo y añadir el nuevo campo de texto con el resultado
    resultadoDiv.innerHTML = "";
    resultadoDiv.appendChild(resultadoInput);
}
