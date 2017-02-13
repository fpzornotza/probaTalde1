<?php

include_once './usuarios_model.php';
//objeto con conexion a BD
$objUsuario = new usuarios_model();
$usuario = $_POST[''];
$consulta = $objUsuario->mostrarPerfilUsuarios($usuario);
return $consulta; //enviar informacion a js