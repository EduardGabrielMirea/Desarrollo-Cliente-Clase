document.addEventListener("DOMContentLoaded", function () {

    var link1 = document.querySelector("#contenido1 a");
    var links = document.querySelectorAll("a");

    function cambiarTamano(event) {
        if (event.target === link1 && event.type === "mouseover") {
            links.forEach(link => link.style.fontSize = "20pt");
        } else if (event.type === "mouseover") {
            links.forEach(link => link.style.fontSize = "16pt");
        } else if (event.type === "mouseout") {
            links.forEach(link => link.style.fontSize = "");
        }
    }

    links.forEach(link => {
        link.addEventListener("mouseover", cambiarTamano);
        link.addEventListener("mouseout", cambiarTamano);
    });
});
