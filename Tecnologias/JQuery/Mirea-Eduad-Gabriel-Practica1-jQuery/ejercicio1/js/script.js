$(document).ready(function() {

    const numeroDeCapas = $('.capa').length;
    alert(`Número de capas creadas: ${numeroDeCapas}`);

    // Cambiar el color de texto de todas las capas a verde
    $('.capa').css('color', 'green');
});