document.addEventListener("DOMContentLoaded",function () {
    
    //Funciones externas usando this. Ej1
    var textoParrafoEj1 = document.querySelector("#ejercicio1 p");
       
    function aumentarTamano() {
        this.style.fontSize = "16pt";
    }
  
    function restaurarTamano() {
        this.style.fontSize = "12pt";
    }
  
    textoParrafoEj1.onmouseover = aumentarTamano;
    textoParrafoEj1.onmouseout = restaurarTamano;
});