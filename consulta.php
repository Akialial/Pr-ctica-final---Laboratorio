<?php

$stmt = $db->query('SELECT * FROM usuarios');
$usuarios = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Consulta de Usuarios</title>
</head>
<body>
    <h1>Consulta de Usuarios</h1>
    <table>
        <tr>
            <th>Nombre</th>
            <th>Primer Apellido</th>
            <th>Segundo Apellido</th>
            <th>Email</th>
            <th>Login</th>
        </tr>
        <?php foreach ($usuarios as $usuario): ?>
            <tr>
                <td><?php echo $usuario['nombre']; ?></td>
                <td><?php echo $usuario['apellido1']; ?></td>
                <td><?php echo $usuario['apellido2']; ?></td>
                <td><?php echo $usuario['email']; ?></td>
                <td><?php echo $usuario['login']; ?></td>
            </tr>
        <?php endforeach; ?>
    </table>
</body>
</html>
