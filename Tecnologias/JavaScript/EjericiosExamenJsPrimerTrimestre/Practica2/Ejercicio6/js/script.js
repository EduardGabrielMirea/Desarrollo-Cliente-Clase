document.addEventListener("DOMContentLoaded",function () {
    const boton = document.getElementById("boton");
    const mensaje = document.getElementById("mensaje");

    boton.addEventListener("click",function () {
        var fecha = new Date();
        var hora = fecha.getHours();
        var minutos = fecha.getMinutes();
        var saludo = " ";

        if (hora <= 14 && minutos === 0) {
            saludo = "Buenos días ";
        } else if((hora > 14 && hora <= 20) && minutos === 0) {
            saludo = "Buenas tardes ";
        }else{
            saludo = "Buenas noches ";
        }

        mensaje.textContent = `${saludo}, son las ${hora}:${minutos} horas`;
    })
});