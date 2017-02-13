<?php
include_once './conductor_model.php';

//$usuario = $_POST['usuario'];

//tabla parada
$id_parada = $_POST['id_parada']; //id_parada
$pueblo = $_POST['pueblo']; //$pueblo
$minuto = $_POST['minuto'];//minuto
$hora = $_POST['hora'];//hora
$parada = $_POST['parada']; //parada
$precio = $_POST['precio']; //precio

//tabla viaje
$n_disponibles = $_POST['n_disponibles']; //n_disponibles
$id_viaje = $_POST['id_viaje']; //id_viaje
$fecha = $_POST['fecha']; //fecha
$salida = $_POST['salida']; //salida
$zona = $_POST['zona']; //zona


echo '<script language="javascript">alert("'.$id_parada.'");</script>';
//echo '<script language="javascript">alert("'.$salida.'");</script>';
//echo '<script language="javascript">alert("'.$zona.'");</script>';
//echo '<script language="javascript">alert("'.$fecha.'");</script>';





//objeto con conexion a BD
$objEditarParada = new conductor_model();


$consulta = $objEditarParada->actualizarParada($id_parada,$hora,$minuto,$pueblo,$parada,$precio);
 $objEditarParada->actualizarViaje($salida,$zona,$fecha,$id_viaje,$n_disponibles);
echo $consulta;