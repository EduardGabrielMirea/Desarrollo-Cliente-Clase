// Uso el factor promesa que permite encadenar los eventos de forma asincrona con el .then()
// y el resolve para indicarle a js que se finaliza la promesa y pasarle el valor/resultado 
// a las acciones encadenadas. 
$.fn.desaparece = function () {
  return new Promise((resolve) => {
    this.fadeOut(250,resolve);
  });
}; 

$.fn.aparece = function () {
    return new Promise((resolve) => {
        this.fadeIn(250,resolve);
    });
};

//Uso lambda para hacer una concatenación de los dos metodos anteriores.
$.fn.desapareceYAparece = function () {
    return this.desaparece().then(() => this.aparece());
};

$(document).ready(function(){
    $('#desaparecer').click(function(){
        $('p').desaparece();  // Desaparecer todos los párrafos al hacer clic en el botón
    });

    $('#aparecer').click(function () {
       $('p').aparece(); 
    });

    $('#desapareceYAparece').click(function () {
       $('p').desapareceYAparece(); 
    });
});
