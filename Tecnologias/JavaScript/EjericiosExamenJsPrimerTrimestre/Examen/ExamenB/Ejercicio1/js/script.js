document.addEventListener("DOMContentLoaded",function () {
    var precioEntrantes = 5;
    var precioSegundoPlato = 10;
    var precioPostre = 5;



    var acciones = {
        TotalPresupuesto: () =>{
            /*Inputs*/ 
            var inputJamon = document.getElementById("jamon");
            var inputEnsalada = document.getElementById("ensalada");
            var inputMexicana = document.getElementById("comida_mexicana");
            var inputItaliana = document.getElementById("comida_italiana");
            
            /*Precios */
            var totalPresupuesto = 0;
            var presupuestoEntrantes = 0;
            var numeroEntrantes = 0;
            var numeroPlatosSegundos = 1;
            
            if (!(inputMexicana.checked || inputItaliana.checked)) {
                event.target.preventDefault();
                alert("Es obligatorio 1 plato secundario");
            } else {
                if (inputEnsalada.checked && !(inputJamon.checked)) {
                    presupuestoEntrantes += precioEntrantes;
                    numeroEntrantes += 1; 
                } else if (inputJamon.checked && !(inputEnsalada.checked)) {
                    presupuestoEntrantes += precioEntrantes;
                    numeroEntrantes += 1;
                }else if ((inputEnsalada.checked && inputJamon.checked)) {
                    presupuestoEntrantes += precioEntrantes + precioEntrantes;
                    numeroEntrantes += 2;
                } else {
                    presupuestoEntrantes = 0;
                }
            }
        
            totalPresupuesto = presupuestoEntrantes + precioSegundoPlato + precioPostre;
            alert(`Tienes selecionados ${numeroEntrantes} , ${numeroPlatosSegundos}.
            Precio final es: ${totalPresupuesto}.
            Los platos seleccionados son: ${inputJamon.checked ? "Jamon" : ""} ${inputEnsalada.checked ? "Ensalada" :""} - ${inputItaliana.checked ? "Italiana" : ""} ${inputMexicana.checked ? "Mexicana" : ""} - Postre incluido.
            `); 

        }
    };
    
    var nuevoMenu = document.createElement("button");
    nuevoMenu.textContent = "Crear Menu";
    document.body.appendChild(nuevoMenu);
    nuevoMenu.addEventListener("click", acciones.TotalPresupuesto);

    document.getElementById("TotalPresupuesto").addEventListener("click",() => acciones.TotalPresupuesto());

});