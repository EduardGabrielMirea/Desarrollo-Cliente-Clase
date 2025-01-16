document.addEventListener("DOMContentLoaded",function () {
   
    function generarBotones(numeroDeBotones) {
        var contenedor = document.getElementById("botones-container");
 
        for (let i = 1; i <= numeroDeBotones; i++) {
         const  button = document.createElement("button");
         button.textContent = `Botón ${i}`;
 
             button.addEventListener("click",function () {
                 var mensaje = document.getElementById("mensaje");
                 mensaje.textContent = `Has pulsado el botón ${i}`;
             });
             contenedor.appendChild(button);
        }
    }
 
    const numeroDeBotones = 5;
    generarBotones(numeroDeBotones);
    
 });