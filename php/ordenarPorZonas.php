<?php
include_once './pasajero_model.php';
$zona=$_GET["zona"];
$objZona = new pasajero_model();
$consulta = $objZona->ordenarPorZonas($zona);
echo $consulta;


