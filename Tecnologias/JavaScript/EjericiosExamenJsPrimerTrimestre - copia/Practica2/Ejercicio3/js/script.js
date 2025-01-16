document.addEventListener("DOMContentLoaded",function () {
    var title = document.querySelector("h1");
    title.textContent = `Bienvenido a mi pagina`;
    var mensaje = document.getElementById("mensaje");

    mensaje.textContent = navigator.userAgent;

    switch (confirm("Continuamos?")) {
        case true:
            alert("Continuamos...");
            break;
        case false:
            alert("no continuamos...");
            break;
        default:
            alert("no se pudo determinar");
            break;
    }

});