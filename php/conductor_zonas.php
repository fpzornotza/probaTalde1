<?php
include_once 'conductor_model.php';
//objeto con conexion a BD
$objConductor = new conductor_model();
$consulta = $objConductor->mostrarZonas();
echo $consulta;
