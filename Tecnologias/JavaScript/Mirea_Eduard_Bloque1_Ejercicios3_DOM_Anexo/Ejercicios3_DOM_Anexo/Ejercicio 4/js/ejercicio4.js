document.addEventListener("DOMContentLoaded",function () {

    var btnNumeroEnlaces = document.getElementById("numeroEnlaces");
    btnNumeroEnlaces.addEventListener("click",function () {
        var enlaces = document.querySelectorAll("a");
        var numeroEnlaces = enlaces.length;
        
        var divNumeroEnlaces = document.createElement("div");
        var pNumeroEnlaces = document.createElement("p");
        divNumeroEnlaces.appendChild(pNumeroEnlaces);
        pNumeroEnlaces.textContent = "Hay " + numeroEnlaces + " enlaces totales en la página";
        
        document.body.appendChild(divNumeroEnlaces);
    });

    var btnReferenciaEnlaces = document.getElementById("referenciaEnlaces");
    btnReferenciaEnlaces.addEventListener("click",function () {
        var  enlaces = document.querySelectorAll("a");
       
        let links = "";
        enlaces.forEach((link,index)=>{
            links += `Enlace ${index +1 }: ${link.href}\n`;
        });
        
        var divNumeroEnlaces = document.createElement("div");
        var pNumeroEnlaces = document.createElement("p");
        divNumeroEnlaces.appendChild(pNumeroEnlaces);
        pNumeroEnlaces.textContent = "Las referencias de los enlaces són: " + links +"\n";
        
        document.body.appendChild(divNumeroEnlaces);
    });

    var btnReferenciaEnlacesParrafo = document.getElementById("referenciaEnlacesParrafo");
    btnReferenciaEnlacesParrafo.addEventListener("click",function () {
      var parrafos = document.querySelectorAll("#parrafos p");

      parrafos.forEach((parrafo, index)=>{
            var enlaces = parrafo.querySelectorAll("a");
            let linksPorParrafo = "";

            enlaces.forEach((link, i)=>{
                linksPorParrafo += `Enlace ${i +1 } del parrafo ${link.href}\n`;
            });
        
            var divNumeroEnlaces = document.createElement("div");
            var pNumeroEnlaces = document.createElement("p");
            divNumeroEnlaces.appendChild(pNumeroEnlaces);
    
            divNumeroEnlaces.textContent = `Párrafo ${index + 1}: ${linksPorParrafo}`;
            document.body.appendChild(divNumeroEnlaces);
        });
    });

    //Para las letras
    var btnActivarVerdeLetras = document.getElementById("activarVerdeLetras");
    btnActivarVerdeLetras.addEventListener("click",function () {
        var parrafos = document.getElementsByTagName("a");
        Array.from(parrafos).forEach(parrafo => {
            parrafo.style.color = "green"; 
        });
    });
    
    //Para el fondo
    var btnActivarVerdeDivision = document.getElementById("activarVerdeDivision");
    btnActivarVerdeDivision.addEventListener("click",function () {
        var parrafos = document.querySelectorAll("#parrafos p a");
        parrafos.forEach(parrafo => {
            parrafo.style.backgroundColor = "green"; 
        });
    });

    //Para las letras
    var btnDesactivarVerdeLetras = document.getElementById("desactivarVerdeLetras");
    btnDesactivarVerdeLetras.addEventListener("click",function () {
        var parrafos = document.getElementsByTagName("a");
        Array.from(parrafos).forEach(parrafo =>{
            parrafo.style.color = "black";
        });
    });

    //Para el fondo
    var btnDesactivarVerdeDivision = document.getElementById("desactivarVerdeDivision");
    btnDesactivarVerdeDivision.addEventListener("click",function () {
        var parrafos = document.querySelectorAll("#parrafos p a");
        parrafos.forEach(parrafo =>{
            parrafo.style.backgroundColor = "white";
        });
    });
});