document.addEventListener('DOMContentLoaded',function(){
    var acciones = {
        abrir: () => {
           var ventana = window.open("","_blank");
           ventana.document.write("<button id='cerrar'>Cerrar</button>");
           ventana.document.getElementById("cerrar").addEventListener("click",function(){
            ventana.close();
           });
        }
    }
    function manejarEvento(event) {
        var accion = acciones[event.target.id]
        accion();
    }
    document.addEventListener("click",manejarEvento);
});