document.addEventListener('DOMContentLoaded',function(){
    const abrirButton = document.getElementById("abrir");
    abrirButton.textContent = "Abrir nueva ventana";

    abrirButton.addEventListener("click",function(){
        let ventana = window.open("","_blank","width=300,height=200");
        ventana.document.write("<button id='cerrar'>Cerrar ventana</button>");
            
        const cerrarButton = ventana.document.getElementById("cerrar");
                cerrarButton.addEventListener("click",function(){
                    ventana.close();
                });
    });
});