/**
 * 
 * Estoy usando un sistema de mapeado con key:value donde la key es el id del boton que quiero que haga 
 * 
 */

document.addEventListener("DOMContentLoaded", function () {
    const contenedor = document.getElementById("contenedor");

    const acciones = {
        verde: () => contenedor.style.backgroundColor = "green",
        azul: () => contenedor.style.backgroundColor = "blue",
        restaurar: () => contenedor.style.backgroundColor = "white",
        default: () => alert("No se ha seleccionado ninguna opción")
    };

    // La función que ejecuta la acción basada en el id
    function manejarEvento(event) {
        const accion = acciones[event.target.id] || acciones.default; // Busca la acción, si no existe usa la default
        accion();
    }

    // Ejemplo de uso: añadiendo un listener para ejecutar manejarEvento
    document.addEventListener('click', manejarEvento);

});