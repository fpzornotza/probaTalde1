<?php

include_once './conductor_model.php';
$objConductor = new conductor_model();

session_start();
$usuario = $_SESSION['username']; //usuario
$salida = trim($_POST['salida']); //salida
$zona = $_POST['zona']; //zona
$fecha = $_POST['fecha']; //fecha
$n_disponibles = $_POST['n_disponibles']; //n_disponibles
//$id_viaje= $_POST['nuevo_id_viaje'];

$pueblo1 = $_POST['pueblo1']; //$pueblo
$hora1 = $_POST['hora1']; //hora
$minuto1 = $_POST['minuto1']; //minuto
$parada1 = $_POST['parada1']; //parada
$precio1 = $_POST['precio1']; //precio


//echo '<script language="javascript">alert("'.$id_viaje.'");</script>';

     //echo '<script language="javascript">alert("'.$id_viaje.'");</script>';



$pueblo2 = $_POST['pueblo2']; //$pueblo
$hora2 = $_POST['hora2']; //hora
$minuto2 = $_POST['minuto2']; //minuto
$parada2 = $_POST['parada2']; //parada
$precio2 = $_POST['precio2']; //precio

$pueblo3 = $_POST['pueblo3']; //$pueblo
$hora3 = $_POST['hora3']; //hora
$minuto3 = $_POST['minuto3']; //minuto
$parada3 = $_POST['parada3']; //parada
$precio3 = $_POST['precio3']; //precio


$pueblo4 = $_POST['pueblo4']; //$pueblo
$hora4 = $_POST['hora4']; //hora
$minuto4 = $_POST['minuto4']; //minuto
$parada4 = $_POST['parada4']; //parada
$precio4 = $_POST['precio4']; //precio





//crear viaje
 $resultado=$objConductor->crearViaje($usuario, $n_disponibles,$fecha,$salida,$zona);
 //actualizar nivel
 $objConductor->actualizarNivel($usuario);
  //crear viajes
$id_viaje1=$objConductor->getIdViaje();

if ($parada1 != "") {
   
 $objConductor->crearParada1($pueblo1, $parada1, $hora1, $minuto1, $precio1,$id_viaje1);

}else{
   // echo '<script language="javascript">alert("rellena todos los campos");</script>';
}
if ($parada2 != "") {
    $objConductor->crearParada2($pueblo2, $parada2, $hora2, $minuto2, $precio2,$id_viaje1);
}else{
  //  echo '<script language="javascript">alert("rellena todos los campos");</script>';
}
if ($parada3 != "") {
    $objConductor->crearParada3($pueblo3, $parada3, $hora3, $minuto3, $precio3,$id_viaje1);
}else{
  //  echo '<script language="javascript">alert("rellena todos los campos");</script>';
}
if ($parada4 != "") {
   $objConductor->crearParada4($pueblo4, $parada4, $hora4, $minuto4, $precio4,$id_viaje1);
}else{
  //  echo '<script language="javascript">alert("rellena todos los campos");</script>';
}

echo $resultado;
