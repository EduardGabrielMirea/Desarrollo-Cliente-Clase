document.addEventListener("DOMContentLoaded",function () {
    var button = document.getElementById("boton");
    var mensaje = document.getElementById("mensaje");

   button.addEventListener("click",function () {
    var fecha = new Date();
    var hora = fecha.getHours(); 
    var minutos =  fecha.getMinutes();
    var horaMinutos = fecha.getHours() + ":" + fecha.getMinutes();

    switch (true) {
        case (hora >= 7 && hora < 14):
            mensaje.textContent = `Buenos Dias, son las ${horaMinutos}`;
            break;
        case (hora >= 14 && hora < 20):
            mensaje.textContent = `Buenas Tardes, son las ${horaMinutos}`;
            break;
        default:
            mensaje.textContent = `Buenas Noches, son las ${horaMinutos}`;
            break;
    }
    });
});