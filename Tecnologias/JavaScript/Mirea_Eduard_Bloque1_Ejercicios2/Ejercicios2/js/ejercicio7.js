document.addEventListener("DOMContentLoaded", function () {
   var bodyBackground = document.getElementById("bodyBackground");
    
    var botonVerde = document.getElementById("verde");
    botonVerde.textContent = "Fondo Verde";
    botonVerde.addEventListener("click",function(){
    bodyBackground.style.backgroundColor = "green";
    });

    var botonRojo = document.getElementById("rojo");
    botonRojo.textContent = "Fondo Rojo";
    botonRojo.addEventListener("click",function(){
        bodyBackground.style.backgroundColor = "red";
    })
    var botonAzul = document.getElementById("azul");
    botonAzul.textContent = "Fondo Azul";
    botonAzul.addEventListener("click",function(){
        bodyBackground.style.backgroundColor = "blue";
    })
});