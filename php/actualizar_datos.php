<?php
include_once './usuarios_model.php';
//crea un objeto registro con la conexion a la bbdd
$actualizar_datos_model = new usuarios_model();


$usuario = trim($_POST['usuario']); //usuario
$nombre = $_POST['nombre']; //nombre
$apellido = $_POST['apellido']; //apellido
$contrasena = $_POST['nuevaContra']; //contraseña
$correo = $_POST['correo']; //email
$telefono =  $_POST['telefono']; //telefono
$coche =  $_POST['coche']; //coche
$descripcion = $_POST['descripcion']; //contraseña
//
//actualizar usuario en la BD
//$resultado = $actualizar_datos_model->actualizarDatos($nombre,$apellido);
//$resultado = $actualizar_datos_model->actualizarDatos($nombre, $apellido, $contrasena, $correo, $telefono, $sexo, $descripcion);
$resultado = $actualizar_datos_model->actualizarDatos($usuario,$nombre, $apellido, $contrasena, $correo, $telefono, $coche, $descripcion);

echo $resultado;