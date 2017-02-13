
<?php

include_once './pasajero_model.php';
$id_viaje= $_POST['id_viaje'];
//echo '<script language="javascript">alert("'.$id_viaje.'");</script>';
$objPasajero = new pasajero_model();
$consulta = $objPasajero->restarAsientos($id_viaje);
echo $consulta;


