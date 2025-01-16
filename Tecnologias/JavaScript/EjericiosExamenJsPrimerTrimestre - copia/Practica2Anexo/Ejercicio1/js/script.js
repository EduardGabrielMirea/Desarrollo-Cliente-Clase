document.addEventListener("DOMContentLoaded",function () {  
    var links = document.querySelectorAll("a");

    //El forEach hace que añadas por cada link el evento mouseover.
    links.forEach(function (link) {     
        link.addEventListener("mouseover",function (event) {
            if (!(link.href === "http://google.es/")) {
                alert("No estas encima del link");
            } else {
                alert("Estas encima de un link de google");
            }
        })
    })
});