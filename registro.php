<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "laboratorio";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error en la conexión a la base de datos: " . $conn->connect_error);
}

$nombre = $_POST["nombre"];
$apellido1 = $_POST["apellido1"];
$apellido2 = $_POST["apellido2"];
$email = $_POST["email"];
$login = $_POST["login"];
$password = $_POST["password"];

if (empty($nombre) || empty($apellido1) || empty($apellido2) || empty($email) || empty($login) || empty($password)) {
    echo "Todos los campos son obligatorios. Por favor, completa el formulario.";
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "El correo electrónico no es válido. Por favor, introduce un correo electrónico válido.";
    exit;
}

if (strlen($password) < 4 || strlen($password) > 8) {
    echo "La contraseña debe tener entre 4 y 8 caracteres.";
    exit;
}

$sql = "SELECT * FROM usuarios WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "El correo electrónico ya está registrado. Por favor, utiliza otro correo electrónico.";
    exit;
}

$sql = "INSERT INTO usuarios (nombre, apellido1, apellido2, email, login, password) VALUES ('$nombre', '$apellido1', '$apellido2', '$email', '$login', '$password')";

if ($conn->query($sql) === TRUE) {
    echo "Registro completado con éxito.";
} else {
    echo "Error al registrar los datos: " . $conn->error;
}

$conn->close();
