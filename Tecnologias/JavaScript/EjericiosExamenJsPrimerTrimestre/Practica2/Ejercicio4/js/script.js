document.addEventListener("DOMContentLoaded",function () {
    var esInternetExplore = document.documentMode;
    if (esInternetExplore) {
        window.resizeTo(500,500);
    } else {
        alert("Operanción no permitida");
    }
});