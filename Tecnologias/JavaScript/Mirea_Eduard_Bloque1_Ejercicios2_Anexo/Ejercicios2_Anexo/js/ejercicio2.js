document.addEventListener("DOMContentLoaded",function () {
    var form  = document.getElementById("dniForm");
    
    form.addEventListener("submit", function (e) {
        var dniInput = document.getElementById("dni").value;

        if (dniInput.trim() === "") {
            alert("El campo DNI no tiene datos. Por favor, rellenalo.");
            event.preventDefault();  // Cancela el envío del formulario
        }
    });
});