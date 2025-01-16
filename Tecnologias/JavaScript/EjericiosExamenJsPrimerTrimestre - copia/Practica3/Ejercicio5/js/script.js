document.addEventListener("DOMContentLoaded", function () {
    //var body = document.getElementsByTagName("body")[0]; 
    var parrafo = document.createElement("p");
    parrafo.textContent = "Este es un parrafo creado dinámicamente";
    parrafo.setAttribute("style", "color: blue;");
    document.body.appendChild(parrafo);
});