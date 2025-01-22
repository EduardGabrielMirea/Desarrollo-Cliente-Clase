<?php
require("conexion.php");  // Incluye el archivo de conexión

// Si se reciben los parámetros 'name' y 'lastName' mediante GET
if (isset($_GET['name']) && isset($_GET['lastName'])) {
    $name = $_GET['name'];
    $lastName = $_GET['lastName'];

    // Insertar los nuevos datos en la base de datos
    $sql = "INSERT INTO persona (nombre, apellido) VALUES (:name, :lastName)";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':lastName', $lastName);

    // Intentar insertar los datos y mostrar un mensaje
    if ($stmt->execute()) {
        echo "Usuario $name $lastName añadido correctamente.";
    } else {
        echo "Error al agregar el usuario.";
    }
}

// Obtener la lista de usuarios de la base de datos
echo "<h3>Usuarios Registrados:</h3>";
$sql = "SELECT * FROM persona";
$stmt = $pdo->query($sql);

// Mostrar todos los usuarios
while ($row = $stmt->fetch()) {
    echo $row['nombre'] . " " . $row['apellido'] . "<br>";
}
?>
