
<?php
include_once './conductor_model.php';
$objReservas = new conductor_model();

session_start();
$usuario = $_SESSION['username'];

$consulta = $objReservas->mostrarAlertas($usuario);
echo $consulta;


