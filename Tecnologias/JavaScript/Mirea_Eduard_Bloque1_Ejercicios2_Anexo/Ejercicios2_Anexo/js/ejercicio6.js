document.addEventListener("DOMContentLoaded", function () {
    var resultadoEval = document.getElementById("resultadoEval");
    
    window.onload = function() {
        let cadena = "2+2";
        let resultado = eval(cadena); 

        resultadoEval.textContent = "El resultado de la suma es: " + resultado; 
    };
});
