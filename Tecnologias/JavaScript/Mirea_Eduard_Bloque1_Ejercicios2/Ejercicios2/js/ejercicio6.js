document.addEventListener("DOMContentLoaded",function() {
    const boton = document.getElementById("mostrarHora");
    boton.textContent = "Hora Actual"
    boton.addEventListener("click", function() {

        const fecha = new Date();
        /*
        const anioActual = fecha.getFullYear();
        const mesActual = fecha.getMonth();
        const diaActual = fecha.getDate();
        */
        const  horaActual = fecha.getHours();
        var minutosActual = fecha.getMinutes();
        var fechaActual = " ";
        // Para que los minutos siempre tengan dos dígitos
        minutosActual = minutosActual < 10 ? '0' + minutosActual : minutosActual;

        if (horaActual  <= 14) {
            fechaActual = `Buenos días, son las ${horaActual}:${minutosActual} horas`;
            
        }else if(horaActual <= 20){
            fechaActual = `Buenas tardes, son las ${horaActual}:${minutosActual} horas`;
            
        }else{
            fechaActual = `Buenas noches, son las ${horaActual}:${minutosActual} horas`;
            
        }
        alert(fechaActual);
    });
});