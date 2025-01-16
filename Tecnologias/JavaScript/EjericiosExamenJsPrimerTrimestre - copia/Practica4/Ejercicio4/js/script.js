document.addEventListener("DOMContentLoaded",function () {

    // AttachEvent y con addEventListener. Ej4
    var textoParrafoEj4 = document.querySelector("#ejercicio4 p");
    
    function colorVerde() {
        this.style.color = "green";
    }
    function colorNegro() {
        this.style.color = "black";
    }

   function cambiarColor() {
    if (textoParrafoEj4.addEventListener) {
        //False es el default, bubbling y lee desde el elemento más hijo hacia el elemento mas padre.
        textoParrafoEj4.addEventListener("mouseover", colorVerde,false);
        textoParrafoEj4.addEventListener("mouseout", colorNegro,false);
    } else if(textoParrafoEj4.attachEvent) {
        textoParrafoEj4.attachEvent("onmouseover",function () {colorVerde.call(textoParrafoEj4);});
        textoParrafoEj4.attachEvent("onmouseout",function(){colorNegro.call(textoParrafoEj4);});
    }
   }
   cambiarColor();
});