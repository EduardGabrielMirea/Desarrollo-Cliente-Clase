document.addEventListener("DOMContentLoaded", function () {
    const locationObject = document.getElementById("locationObject");
    const googleButton = document.getElementById("googleButton");
    googleButton.textContent = " Cargar la página de google";

    var urlCompleta = "La URL del documento actual es: " + this.location.href + " <br> ";
    var pathNameActual = "El pathName del documento actual es: " + this.location.pathname + " <br> ";
    var protocoloActual = "El protocolo de la página es: " + this.location.protocol + " <br> ";
    //locationObject.textContent = urlCompleta.concat(' ',pathNameActual.concat(' ',protocoloActual));
    locationObject.innerHTML = urlCompleta + pathNameActual + protocoloActual;

    googleButton.addEventListener("click", function () {
        window.open("https://www.google.com", "_blank"); // Abre Google en una nueva pestaña
    });
});

/*
document.addEventListener("DOMContentLoaded", function () {
    var mensajeElemento = document.getElementById("mensaje");
    mensajeElemento.textContent = `${window.location.href}, ${window.location.pathname}, ${window.location.protocol}`;

    var acciones = {
        google: () => window.open("https://www.google.com/?hl=es", "_blank"),
    }

    function manejarEvento(event) {
        var accion = acciones[event.target.id];
        accion();
    }

    document.addEventListener("click", manejarEvento);
});
*/