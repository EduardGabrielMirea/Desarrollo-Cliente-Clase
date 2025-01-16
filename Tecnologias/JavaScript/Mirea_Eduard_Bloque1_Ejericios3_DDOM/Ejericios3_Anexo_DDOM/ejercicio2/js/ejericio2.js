document.addEventListener("DOMContentLoaded",function () {
    var listaelemen = document.getElementById("listaelemen");
    
    //Añadir como ultimo elemento
    var btnAnadir =  document.getElementById("btnAnadir");
    btnAnadir.addEventListener("click", function () {
            var nuevoElemento = document.createElement("li");
            var textoNuevoElemento = document.createTextNode("panda")
            nuevoElemento.appendChild(textoNuevoElemento);
            listaelemen.appendChild(nuevoElemento);
        });

    //Instertar delante del primer elemento de la lista
    var btnInsertar = document.getElementById("btnInsertar");
    btnInsertar.addEventListener("click", function () {
        var nuevoElemento = document.createElement("li");
        var textoNuevoElemento = document.createTextNode("lobo");
        nuevoElemento.appendChild(textoNuevoElemento);
        //var hijo = listaelemen.getElementsByTagName("li");
        listaelemen.insertBefore(nuevoElemento, listaelemen.firstChild);
    });

    //Reemplazar elemento
    var btnReemplazar = document.getElementById("btnReemplazar");
    btnReemplazar.addEventListener("click",function () {
        var nuevoElemento = document.createElement("li");
        var textoNuevoElemento = document.createTextNode("leon");
        nuevoElemento.appendChild(textoNuevoElemento);
        if (listaelemen.firstChild) {
            listaelemen.replaceChild(nuevoElemento,listaelemen.firstChild);
        }    
    });

    //Borrar  elemento
    var btnBorrar = document.getElementById("btnBorrar");
    btnBorrar.addEventListener("click",function () {
        var ultimoElemento = listaelemen.querySelector("li:last-child"); // Seleccionar el último <li>
        if (ultimoElemento) {
            listaelemen.removeChild(ultimoElemento);
        }
    });

    //Clonar lista completa
    var btnClonar = document.getElementById("btnClonar");
    btnClonar.addEventListener("click",function () {
        var botonera = document.getElementById("botonera");
        var clon = listaelemen.cloneNode(true); 
        document.body.insertBefore(clon,botonera); 
    });
    
    //Crear Sublista funciones DOM
    var btnSublistaDom = document.getElementById("btnSublistaDom");
    btnSublistaDom.addEventListener("click",function () {
        var clon = listaelemen.cloneNode(true); 
        var elementoLeon = listaelemen.childNodes[1];
        elementoLeon.appendChild(clon); 
    });

    var btnSublistaInnerHTML = document.getElementById("btnSublistaInnerHTML");
    btnSublistaInnerHTML.addEventListener("click", function () {
        var elementoLeon = listaelemen.childNodes[1];
        elementoLeon.innerHTML += `
            <ul>
                <li>leon</li>
                <li>pantera</li>
                <li>jirafa</li>
            </ul>`;
    });

});