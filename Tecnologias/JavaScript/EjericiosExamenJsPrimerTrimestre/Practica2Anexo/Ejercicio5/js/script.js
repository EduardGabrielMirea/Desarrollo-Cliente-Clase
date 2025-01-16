document.addEventListener("DOMContentLoaded",function () {
    var mensaje = document.getElementById("mensaje");
    mensaje.textContent = `Bienvenida`;
    
    setTimeout(() => {
        window.location.href = 'new.html';
    }, 10000);
});