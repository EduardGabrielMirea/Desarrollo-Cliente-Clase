document.addEventListener("DOMContentLoaded", function () {
    var fechaActual = document.getElementById("fecha-actual");
    
    fechaActual.addEventListener("click", function () {
        var fecha = new Date();
        var mensaje = document.getElementById("mensaje");
        mensaje.textContent = fecha.toDateString();
    });

    /*
    
    document.addEventListener("DOMContentLoaded", function () {
    var fechaActual = document.getElementById("fecha-actual");
    
    fechaActual.addEventListener("click", function () {
        var fecha = new Date();
        var mensaje = document.getElementById("mensaje");

        // Arrays con los nombres de los días y los meses en español
        var diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

        // Obtener los componentes de la fecha
        var diaSemana = diasSemana[fecha.getDay()];
        var dia = fecha.getDate();
        var mes = meses[fecha.getMonth()];
        var anio = fecha.getFullYear();

        // Construir la fecha en el formato deseado
        var fechaFormateada = `${diaSemana}, ${dia} de ${mes} de ${anio}`;

        // Mostrar la fecha formateada en el elemento mensaje
        mensaje.textContent = fechaFormateada;
    });
});
    
    */
});