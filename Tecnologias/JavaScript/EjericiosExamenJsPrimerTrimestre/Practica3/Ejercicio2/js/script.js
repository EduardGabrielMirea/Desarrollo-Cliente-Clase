document.addEventListener("DOMContentLoaded", function () {
    const contenedor = document.getElementById("contenedor");

    const botonera = document.getElementById("botonera");
    botonera.addEventListener("click", function (event) {
        var lista = document.querySelector("#contenedor #lista-desordenada");

        if (event.target.id === "add") {
            // Añadir un nuevo elemento al final
            var newLi = document.createElement("li");
            newLi.textContent = "tigre";
            lista.appendChild(newLi);

        } else if (event.target.id === "insertar") {
            // Insertar un nuevo elemento al inicio
            var newLi = document.createElement("li");
            newLi.textContent = "cebra";
            var primerLi = document.getElementById("primer-li");
            primerLi.after(newLi);

        } else if (event.target.id === "reemplazar") {
            // Reemplazar el segundo elemento
            var newLi = document.createElement("li");
            newLi.textContent = "mono";
            var segundoLi = lista.children[1];
            segundoLi.replaceWith(newLi);

        } else if (event.target.id === "borrar") {
            // Borrar el elemento que haya atras del primer li
            var primerLi = document.getElementById("primer-li");
            var siguienteLi = primerLi.nextElementSibling;
            siguienteLi.remove();

        } else if (event.target.id === "clonar") {
            // Clonar la lista completa
            var listaClonada = lista.cloneNode(true);
            contenedor.appendChild(listaClonada);

        } else if (event.target.id === "sublista-dom") {
            //“Crear Sublista dentro de león con funciones DOM” creará una nueva lista desordenada dentro del primer elemento
            var newUl = document.createElement("ul");
            var primerLi = document.getElementById("primer-li");
            primerLi.appendChild(newUl);
            var newLi = document.createElement("li");
            newLi.textContent = "oso";
            newUl.appendChild(newLi);

        } else if (event.target.id === "sublista-innerHTML") {
            //“Crear Sublista dentro de león con InnerHTML” hará lo mismo que el anterior pero utilizando esta propiedad
            var newUl = document.createElement("ul");
            var primerLi = document.getElementById("primer-li");
            primerLi.innerHTML += `
                <ul>
                    <li>leon</li>
                    <li>pantera</li>
                    <li>jirafa</li>
                </ul>
            `;
        }
    });

});