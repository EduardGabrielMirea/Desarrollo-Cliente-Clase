document.addEventListener("DOMContentLoaded",function () {
    var body = document.querySelector("body");
    
    var acciones = {
        verde: () => body.style.backgroundColor = "green",
        azul: () => body.style.backgroundColor = "blue",
        rojo: () => body.style.backgroundColor = "red",
        default: () => alert("No se a indicado color")
    };
    
    function manejarEvento(event) {
        var accion = acciones[event.target.id] || acciones.default;
        accion();
    }
    
    document.addEventListener("click",manejarEvento);
    
    });