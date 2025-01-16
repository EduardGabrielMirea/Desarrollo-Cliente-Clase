<?php
// Verifica si los datos han sido enviados
if (isset($_GET['usuario']) && isset($_GET['clave'])) {
    $usuario = $_GET['usuario'];
    $clave = $_GET['clave'];

    // Verificar credenciales
    if ($usuario === 'pepe' && $clave === 'hola') {
        echo "Usuario correcto";
    } else {
        echo "Usuario incorrecto";
    }
} else {
    echo "Datos no enviados correctamente.";
}
?>
