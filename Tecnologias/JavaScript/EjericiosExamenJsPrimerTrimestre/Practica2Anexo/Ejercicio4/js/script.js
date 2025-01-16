document.addEventListener("DOMContentLoaded", function () {
    const submit = document.getElementById("submit");
    const numberInput = document.getElementById("number");

    // Establecer el placeholder, valor mínimo y máximo del campo de entrada
    numberInput.placeholder = "Introduce un número";
    numberInput.min = 1;
    numberInput.max = 10;

    // Generar el número aleatorio entre 1 y 10
    const aleatorio = Math.floor(Math.random() * 10) + 1;
    console.log("Número aleatorio:", aleatorio); // Para pruebas

    submit.addEventListener("click", function () {
        const valor = numberInput.value;
        if (valor <= 0 || valor > 10) {
            alert("El valor tiene que estar entre 1 y 10");
        } else {
            if (parseInt(valor) === aleatorio) { // Compara los valores numéricos
                alert("¡Correcto!");
            } else {
                alert("¡Incorrecto! Intenta de nuevo.");
            }
        }

    });
});
