document.addEventListener("DOMContentLoaded",function () {
    var comprueba = document.getElementById("comprueba");
    var numeroInput = document.getElementById("numero4");
    var printResultado = document.getElementById("resultadoComprovacion");
    const numeros = [1,2,3,4,5,6,7,8,9,10];

    comprueba.addEventListener("click",function () {
       var valor = parseInt(numeroInput.value);
       var numerosAleatorios = numeros[Math.floor(Math.random()* numeros.length)];
        
        if (valor === numerosAleatorios) {
            alert("Enorabuena el numero que has introducido, coincide con el  generado aleatoriamente "+"\t" + numerosAleatorios);
        }else{
            alert("Lo siento, el numero que has introducido no coincide con el generado aleatoriamente"+"\t" + numerosAleatorios);
        }
    });
    
});