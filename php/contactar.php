<?php

include_once 'SendMail/sendMensaje.php';

session_start();
$usuario = $_SESSION['username'];
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

$viewenviarMail->sendMail($usuario,$nombre,$telefono,$email,$mensaje);
