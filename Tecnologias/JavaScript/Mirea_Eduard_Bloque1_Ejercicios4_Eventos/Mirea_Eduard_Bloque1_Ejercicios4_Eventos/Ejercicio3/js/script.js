document.addEventListener("DOMContentLoaded",function () {
    
    // Función que cambia el tamaño del texto en función del tipo de evento. Ej3
    var textoParrafoEj3 = document.querySelector("#ejercicio3 p");
    
    function cambiarTamano(event) {
        if (event.type === "mouseover") {
            event.target.style.fontSize = "16pt";
        } else if(event.type === "mouseout"){
            event.target.style.fontSize = "12pt";
        }
    }

    textoParrafoEj3.onmouseover = cambiarTamano;
    textoParrafoEj3.onmouseout = cambiarTamano;
});