<?php

include_once './conductor_model.php';
$estado = $_POST['estado'];
$id_parada = $_POST['id_parada'];
echo '<script language="javascript">alert("'.$estado.'");</script>';
echo '<script language="javascript">alert("'.$id_parada.'");</script>';
$objConductor = new conductor_model();
$consulta = $objConductor->cambiar_estado_reserva($id_parada,$estado);

