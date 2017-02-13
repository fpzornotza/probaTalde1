<?php

include_once './usuarios_model.php';
//objeto con conexion a BD
$objUsuario = new usuarios_model();
session_start();
$usuario = $_SESSION['username']; // usuario logeado
$consulta = $objUsuario->disponibilidadCoche($usuario);
echo $consulta; //env