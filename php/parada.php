<?php
include_once './conductor_model.php';
//objeto con conexion a BD
//$usuario = $_POST['usuario']; //usuario
session_start();
$usuario = $_SESSION['username'];

$id_viaje = $_GET['id_viaje'];
//echo '<script language="javascript">alert("'.$id_viaje.'");</script>';
$objParadas = new conductor_model();
$consulta = $objParadas->mostrarParadas($id_viaje);
//$consulta = $objParadas->mostrarParadas($usuario,$id_viaje1);
echo $consulta;

