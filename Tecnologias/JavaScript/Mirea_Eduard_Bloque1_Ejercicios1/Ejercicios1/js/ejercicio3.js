function estacionDelAno(mes) {
    let estacion;
    switch (mes.toLowerCase()) {  
        case 'diciembre':
        case 'enero':
        case 'febrero':
            estacion = "invierno";
            break;
        case 'marzo':
        case 'abril':
        case 'mayo':
            estacion = "primavera";
            break;
        case 'junio':
        case 'julio':
        case 'agosto':
            estacion = "verano";
            break;
        case 'septiembre':
        case 'octubre':
        case 'noviembre':
            estacion = "otoño";
            break;
        default:
            estacion = "Mes no válido";  
            break;
    }
    return estacion;
}

const mesUsuario = prompt("Dime un mes:");
const estacion = estacionDelAno(mesUsuario);

alert("El mes de " + mesUsuario + " corresponde a la estación: " + estacion);
