function redimensionarPantalla() {
    var esIE = false || !!document.documentMode; 
    if (esIE) {  
        window.resizeTo(500, 500);
    } else {
        alert("Operación no permitida con este navegador");
    }
}

window.onload = function() {
    redimensionarPantalla();
};