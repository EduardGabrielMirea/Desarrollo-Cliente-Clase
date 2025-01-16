document.addEventListener("DOMContentLoaded",function(){
    var mensajeElemento = document.getElementById("mensaje");
    mensajeElemento.textContent = `${window.location.href}, ${window.location.pathname}, ${window.location.protocol}`;
   
    var acciones = {
    google: () => window.open("https://www.google.com/?hl=es","_blank"),
   }

   function manejarEvento(event) {
    var accion = acciones[event.target.id];
    accion();
   }

   document.addEventListener("click", manejarEvento);
});