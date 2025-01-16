document.addEventListener("DOMContentLoaded", function() {
    var contenedor = document.getElementById("contenedor");

    //Añadir como primer elemento
    var anadir =  document.getElementById("anadir");
    anadir.addEventListener("click", function() {
        var nuevoParrafo = document.createElement("p");
        nuevoParrafo.textContent = "Párrafo añadido";
        contenedor.appendChild(nuevoParrafo);
    });

    // Botón para insertar párrafo
    var insertar =  document.getElementById("insertar");
    insertar.addEventListener("click", function() {
        var nuevoParrafo = document.createElement("p");
        nuevoParrafo.textContent = "Párrafo insertado";
        var primerParrafo = contenedor.getElementsByTagName("p")[0];
        primerParrafo.insertAdjacentElement("afterend", nuevoParrafo); 
    });

    // Botón para reemplazar el segundo párrafo
    var reemplazar = document.getElementById("reemplazar");
    reemplazar.addEventListener("click", function() {
        var parrafos = contenedor.getElementsByTagName("p"); 
        if (parrafos.length > 1) { 
            parrafos[1].textContent = "Párrafo reemplazado";
        } else {
            alert("No hay suficiente párrafos para reemplazar.");
        }  
    });

    // Botón para borrar el párrafo detrás del primer párrafo
    var borrar = document.getElementById("borrar");
    borrar.addEventListener("click", function() {
        var parrafos = contenedor.getElementsByTagName("p");
        if (parrafos.length > 1) { 
            contenedor.removeChild(parrafos[1]); 
        } else {
            alert("No hay párrafos para borrar.");
        }
    });

    // Botón para clonar el div contenedor
    var clonar =  document.getElementById("clonar");
    clonar.addEventListener("click", function() {
        var clon = contenedor.cloneNode(true); 
        document.body.appendChild(clon); 
    });
});
