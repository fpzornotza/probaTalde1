<?php
include_once './pasajero_model.php';
$objUsuario1 = new pasajero_model();
$usuario = $_GET['usuario'];
$usuarioDatos = $objUsuario1->mostrarPerfilUsuariosPasajero($usuario);

echo $usuarioDatos;