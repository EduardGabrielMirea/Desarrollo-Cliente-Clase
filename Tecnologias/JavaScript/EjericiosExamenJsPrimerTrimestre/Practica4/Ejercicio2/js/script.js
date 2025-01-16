document.addEventListener("DOMContentLoaded",function () {
    
    //Estructura semántica. Ej2
    var textoParrafoEj2 = document.querySelector("#ejercicio2 p");
   
    textoParrafoEj2.addEventListener("mouseover",function () {
        textoParrafoEj2.style.fontSize = "16pt";
    });
   
    textoParrafoEj2.addEventListener("mouseout",function () {
        textoParrafoEj2.style.fontSize = "12pt";
        
    });
});