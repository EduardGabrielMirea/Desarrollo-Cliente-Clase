document.addEventListener("DOMContentLoaded",function () {

    //Formulario. Ej5 https://www.freecodecamp.org/espanol/news/lista-de-codigos-de-teclas-en-javascript/
 
    var inputFormulario = document.querySelector("#numeros");
    inputFormulario.addEventListener("keydown",function (event) {
 
     var teclasPermitidas = ["Backspace"];
         if (!(event.key >= '0' &&  event.key <= '9') && !teclasPermitidas.includes(event.key)) {
             // que solo se puedan introducir numeros
             event.preventDefault();
             alert("Solo se pueden introducir y borrar números");
         }
    });
 });