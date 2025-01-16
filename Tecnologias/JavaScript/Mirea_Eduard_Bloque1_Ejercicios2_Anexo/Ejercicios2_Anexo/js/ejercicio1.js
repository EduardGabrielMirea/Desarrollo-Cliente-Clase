document.addEventListener('DOMContentLoaded',function(){
    var hipervinculo =  document.getElementById('hipervinculo');
    hipervinculo.textContent = "Google";
    hipervinculo.addEventListener('mouseover',(event) =>{
        alert("Estas encima del hipervinculo");
        setTimeout(() => {
            location.reload();
        }, 3000);
    });
});