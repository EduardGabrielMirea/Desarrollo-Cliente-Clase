$(document).ready(function() {
    $(".ocultar").click(function (event) {
        event.preventDefault();
        $("#mielemento").hide("slow");
    });
    $(".mostrar").click(function (event) {
        event.preventDefault();
        $("#mielemento").show(2500); // El numero cuando menor es más rápido se muestra. 1000 muestra más rapido la imagen.
    });
});