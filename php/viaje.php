<?php
include_once './conductor_model.php';
//objeto con conexion a BD
session_start();
$usuario = $_SESSION['username'];
$objviaje = new conductor_model();

$viajes = $objviaje->mostrarViaje($usuario);
//echo '<script language="javascript">alert("holaaa");</script>';


echo json_encode($viajes);
//print_r($viajes);