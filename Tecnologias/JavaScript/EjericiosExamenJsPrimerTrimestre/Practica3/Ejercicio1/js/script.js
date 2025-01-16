document.addEventListener("DOMContentLoaded",function () {
    const contenedor = document.getElementById("contenedor");
    const parrafoInicial = document.getElementById("parrafo-inicial");

    const add = document.getElementById("add");
    add.addEventListener("click",function () {
        var nuevoParrafo = document.createElement("p");
        nuevoParrafo.textContent = `Párrafo añadido`;
        contenedor.appendChild(nuevoParrafo);
    });


    const insertar = document.getElementById("insertar");
    insertar.addEventListener("click",function () {
        var nuevoParrafo = document.createElement("p");
        nuevoParrafo.textContent = `Párrafo insertado`;
        parrafoInicial.after(nuevoParrafo);    
    });

    const reemplazar = document.getElementById("reemplazar");
    reemplazar.addEventListener("click",function () {
        var parrafos = contenedor.getElementsByTagName("p"); 
        if (parrafos.length > 1) { 
            parrafos[1].textContent = "Párrafo reemplazado";
        } else {
            alert("No hay suficiente párrafos para reemplazar.");
        }  
    });

    const borrar = document.getElementById("borrar");
    borrar.addEventListener("click",function () {
        var parrafos = contenedor.getElementsByTagName("p");
        if (parrafos.length > 1) { 
            contenedor.removeChild(parrafos[1]); 
        } else {
            alert("No hay párrafos para borrar.");
        }
    });

    const clonar = document.getElementById("clonar");
    clonar.addEventListener("click", function() {
        var clon = contenedor.cloneNode(true); 
        document.body.appendChild(clon); 
    });

});