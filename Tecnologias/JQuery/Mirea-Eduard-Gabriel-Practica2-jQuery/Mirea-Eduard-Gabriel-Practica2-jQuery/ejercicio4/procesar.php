<?php
// Comprobar si los parámetros están presentes
$param1 = isset($_POST['param1']) ? $_POST['param1'] : null;
$param2 = isset($_POST['param2']) ? $_POST['param2'] : null;

// Procesar los parámetros y devolver un resultado
if ($param1 && $param2) {
    echo "Parámetro 1: " . htmlspecialchars($param1) . "<br>"; //La función htmlspecialchars() es una opción segura para escapar caracteres especiales en datos proporcionados por el usuario, asegurando que no se ejecuten como HTML o JavaScript en el navegador. 
    echo "Parámetro 2: " . htmlspecialchars($param2) . "<br>";
    echo "Resultado: Parámetros procesados correctamente.";
} elseif ($param1) {
    echo "Parámetro 1: " . htmlspecialchars($param1) . "<br>";
    echo "Resultado: Solo se envió el parámetro 1.";
} elseif ($param2) {
    echo "Parámetro 2: " . htmlspecialchars($param2) . "<br>";
    echo "Resultado: Solo se envió el parámetro 2.";
} else {
    echo "No se enviaron parámetros.";
}
?>
