document.addEventListener("DOMContentLoaded",function(){
    const boton = document.getElementById("mostrarFecha");
    boton.textContent = "Fecha Actual";
    boton.addEventListener("click", function() {

        const fecha = new Date();
        /*
        const anioActual = fecha.getFullYear();
        const mesActual = fecha.getMonth();
        const diaActual = fecha.getDate();
        const fechaActual = `${diaActual} de ${mesActual} de ${anioActual}`;
        */
        alert("La hora actual es: " + fecha.toDateString());
    });
});