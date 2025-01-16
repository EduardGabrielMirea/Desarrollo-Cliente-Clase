document.addEventListener("DOMContentLoaded",function () {
    const contador = document.getElementById("contador");
    contador.value = 0;
    contador.readOnly = true; //readOnly para que no se pueda editar.

    var acciones = {
        sumar: () => {
            contador.value = parseInt(contador.value) + 10;
        },
        inicializar: () => {
            contador.value = 0;
        }
    };

    document.getElementById("sumar").addEventListener("click", () => acciones.sumar());
    document.getElementById("inicializar").addEventListener("click", () => acciones.inicializar());

});