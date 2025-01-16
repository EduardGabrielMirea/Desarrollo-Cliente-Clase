document.addEventListener("DOMContentLoaded", function() {
    var titulo = document.getElementById("title");
    titulo.textContent = "Bienvenido a mi página";  
    
    var plataforma = document.getElementById("platform");
    plataforma.textContent = navigator.userAgent; 

    if (confirm("¿Quieres continuar?")) {
        alert("Continuamos...");
    } else {
        alert("Has cancelado la operación.");
    }
});

/*
    DOMContentLoaded: Este evento se dispara cuando el documento HTML ha sido completamente cargado y parseado,
    pero antes de que se carguen imágenes, 
    estilos u otros recursos externos.
    Es ideal para ejecutar scripts que interactúan con el DOM.
*/