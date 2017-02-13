<?php
include_once './opinion_model.php';
$usuario=$_GET['usuario_recibir'];
$objOpinion = new opinion_model();
$consulta = $objOpinion->getMensaje($usuario);
                
echo $consulta;

