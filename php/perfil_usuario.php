<?php
session_start();
if($_SESSION['logeado'] == TRUE){   ////////////COMPRUEBA QUE EL USUARIO ESTA LOGEADO///////////


include_once './usuarios_model.php';
//objeto con conexion a BD
$objUsuario = new usuarios_model();
session_start();
$usuario = $_SESSION['username']; // usuario logeado
$consulta = $objUsuario->mostrarPerfilUsuarios($usuario);
return $consulta; //enviar informacion a js
}    