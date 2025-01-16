document.addEventListener("DOMContentLoaded", function () {
    var mes = prompt("Dime un mes: ");

    function sacarEstacion(mes) {
        var estacion;
        switch (mes.toLowerCase()) {
            case 'diciembre':
            case 'enero':
            case 'febrero':
                estacion = 'invierno';
                break;
            case 'marzo':
            case 'abril':
            case 'mayo':
                estacion = 'primavera';
                break;
            case 'junio':
            case 'julio':
            case 'agosto':
                estacion = 'verano';
                break;
            case 'septiembre':
            case 'octubre':
            case 'noviembre':
                estacion = 'otoño';
                break;
            default:
                estacion = 'Mes no valido';
                break;
        }
        return estacion;
    }

    var estacion = sacarEstacion(mes);
    alert("Estamos en " + estacion);
});