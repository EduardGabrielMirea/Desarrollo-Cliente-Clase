document.addEventListener("DOMContentLoaded",function () {
    var parrafo = document.getElementById("parrafo");
    var defultColor =  parrafo.style.backgroundColor = "white";
    
    var azul = document.getElementById("azul");
    azul.addEventListener("click", function () {
        parrafo.style.backgroundColor = "blue";
    });

    var verde = document.getElementById("verde");
    verde.addEventListener("click",function () {
        parrafo.style.backgroundColor = "green";
    })

    var reload = document.getElementById("reload");
    reload.addEventListener("click",function () {
        parrafo.style.backgroundColor =  defultColor;
    });

})