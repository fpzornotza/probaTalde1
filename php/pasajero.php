<?php
include_once './pasajero_model.php';

$objPasajero = new pasajero_model();
$consulta = $objPasajero->mostrarTodasLasParadas();
                
echo $consulta;

