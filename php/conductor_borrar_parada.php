<?php
include_once './conductor_model.php';
//objeto con conexion a BD
$id_parada = $_POST['id_parada']; //$pueblo
$objParada = new conductor_model();
$consulta = $objParada->borrarParada($id_parada);
$objParada->borrarViajes();
echo $consulta;
