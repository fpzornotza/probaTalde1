

<?php

include_once './usuarios_model.php';
include_once 'SendMail/send.php';




// crea un objeto vista de solo metodos
//crea un objeto registro con la conexion a la bbdd
$registro_model = new usuarios_model();

//mostrar formulario
//if (isset($_POST['opciones'])) {
//
//    switch ($_POST['opciones']) {
//
//        case "registrar":
//valores del formulario registrar
$usuario = $_POST['usuario']; //usuario nuevo
$nombre = $_POST['nombre']; //nombre
$apellido = $_POST['apellido']; //apellido
$telefono = $_POST['telefono']; //telefono
$correo = $_POST['correo']; //email
$contrasena = $_POST['contrasena']; //contraseña
$sexo = $_POST['sexo']; //sexo
$coche = $_POST['coche']; //disponibilidad de coche
$foto = $_POST['foto'];




//print_r($_POST);
$resultado = $registro_model->altaUsuario($usuario, $nombre, $apellido, $telefono, $correo, $contrasena, $sexo,$coche,$foto);

if($resultado){
    $viewenviarMail->sendMail($correo,$usuario);
    echo 1;
}else{
    echo 0;
}

?>