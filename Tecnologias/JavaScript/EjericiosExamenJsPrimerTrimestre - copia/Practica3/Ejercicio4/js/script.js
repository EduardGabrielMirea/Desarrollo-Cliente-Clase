document.addEventListener("DOMContentLoaded",function () {
    const contenedor = document.getElementById("contenedor");
    const botonera = document.getElementById("botonera");

    botonera.addEventListener("click", function (event) {
        if (event.target.tagName === "BUTTON") {
            const button = event.target;
            if (button.id === "btnNumeroImg") {
               // Contar cuantos img tags hay en el contenedor
               let cantidadImg = contenedor.querySelectorAll("img").length;
               alert(`Número de imágenes: ${cantidadImg}`);
    
            } else if (button.id === "btnNumeroEnlaces") {
                // Contar cuantos a tags hay en el contenedor
                let cantidadEnlaces = contenedor.querySelectorAll("a").length;
                alert(`Número de enlaces: ${cantidadEnlaces}`);
    
            }
        
        }

    });
});