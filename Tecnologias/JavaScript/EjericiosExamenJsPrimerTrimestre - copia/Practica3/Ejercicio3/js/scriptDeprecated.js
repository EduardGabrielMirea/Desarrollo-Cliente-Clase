//Usando if else, junto con event.target es mejor que usar Listeners. (Usar event.target mejor que getElementsByTagName)
//Pero hay incluso mejores formas que usando.

document.addEventListener("DOMContentLoaded", function () {
    const contenedor = document.getElementById("contenedor");

    contenedor.addEventListener("click", function (event) {
        //const botonera = document.getElementsByTagName("button");

        if (event.target.id === "verde") {
            contenedor.style.backgroundColor = "green";
        } else if (event.target.id === "azul") {
            contenedor.style.backgroundColor = "blue";
        } else if (event.target.id === "restaurar") {
            contenedor.style.backgroundColor = "white";
        }
    });
});

/*
    //1. Recomendado usar Switch ferente a if->else

    switch (event.target.id) {
        case "verde":
            contenedor.style.backgroundColor = "green";
                break;
        case "azul":
            contenedor.style.backgroundColor = "blue";
                break;
        case "restaurar":
            contenedor.style.backgroundColor = "white";
                break;
        default:
            alert("No se ha seleccionado ninguna opción");
                break;
        }


    // Define an object 'acciones' with different functions to change the background color of 'contenedor'
    const acciones = {
        // Function to change background color to green
        verde: () => contenedor.style.backgroundColor = "green",
        // Function to change background color to blue
        azul: () => contenedor.style.backgroundColor = "blue",
        // Function to restore background color to white
        restaurar: () => contenedor.style.backgroundColor = "white",
        // Default function to alert if no valid option is selected
        default: () => alert("No se ha seleccionado ninguna opción")
    };

    // Function to handle the event based on the id of the target element
    function manejarEvento(event) {
        // Retrieve the action based on the id of the event target, or use the default action if the id is not found
        const accion = acciones[event.target.id] || acciones.default;
        // Execute the retrieved action
        accion();
    }

    // Example usage: adding an event listener to execute 'manejarEvento' on click events
    document.addEventListener('click', manejarEvento);
*/
