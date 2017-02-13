<?php
include_once './opinion_model.php';
//objeto con conexion a BD
session_start();

$comentario = $_POST['comentario']; //usuario_recibir
$usuario_recibir = $_POST['usuario_recibir']; //usuario_recibir
$usuario = $_SESSION['username'];
//echo '<script language="javascript">alert("'.$comentario.'");</script>';
//echo '<script language="javascript">alert("'.$usuario_recibir.'");</script>';


$objOpinion = new opinion_model();
echo '<script language="javascript">alert("'.$usuario_recibir.'");</script>';
$consulta = $objOpinion->enviarMensaje($comentario,$usuario_recibir,$usuario);
//echo '<script language="javascript">alert("'.$consulta.'");</script>';
echo $consulta;