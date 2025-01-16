document.addEventListener('DOMContentLoaded', function() {
    const enlace = document.getElementById('miEnlace');
    enlace.addEventListener('click', function(event) {
        event.preventDefault();
        alert('El enlace no funciona');
    });
});