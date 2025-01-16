 document.addEventListener("DOMContentLoaded",function () {
    var btnNumeroImg =  document.getElementById("btnNumeroImg");
    btnNumeroImg.addEventListener("click",function () {
        var numeroImagenes = document.getElementsByTagName("img");
        alert("Número total de imágenes en la página: " + numeroImagenes.length);
    });

    var btnNumeroEnlaces = document.getElementById("btnNumeroEnlaces");
    btnNumeroEnlaces.addEventListener("click",function () {
        var numeroEnlaces = document.getElementsByTagName("a");
        alert("Número total de enlaces en la página: " + numeroEnlaces.length);
    });
 });
 