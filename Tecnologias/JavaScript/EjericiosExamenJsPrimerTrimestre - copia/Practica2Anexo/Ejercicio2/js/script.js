document.addEventListener("DOMContentLoaded",function () {

   var acciones = {
        submit: () =>{
            var dniInput = document.getElementById("dni").value;
            dniInput.trim() === "" 
                ? alert("El campo DNI no tiene datos. Por favor, ingresa un valor.")
                : alert("Formulario enviado correctamente.");
        }
   };

    document.getElementById("submit").addEventListener("click",() => acciones.submit());

});
