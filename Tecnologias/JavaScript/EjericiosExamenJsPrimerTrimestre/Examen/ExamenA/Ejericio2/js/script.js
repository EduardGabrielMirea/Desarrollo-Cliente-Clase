document.addEventListener("DOMContentLoaded", function () {
    var link1 = document.getElementById("1");
    var link2 = document.getElementById("2");
    var link3 = document.getElementById("3");


    const acciones = {
        1: () => {
            link1.style.fontSize = "20px";
            link2.style.fontSize = "20px";
            link3.style.fontSize = "20px";
        }
    }

      // La función que ejecuta la acción basada en el id
    function manejarEvento(event) {
        const accion = acciones[event.target.id] || acciones.default; // Busca la acción, si no existe usa la default
        accion();
    }
    
    document.addEventListener('click', manejarEvento);
});