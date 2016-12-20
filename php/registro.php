

<?php

include_once './usuarios_model.php';




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
//



//comprobacion de usuario
//            if ($registro_model->existeUsuario($usuario)) {
//
//                //el suario existe, mensaje error
//                $resultado="el usuario  exixte";
//            } else {
//insertar usuario en la BD
$resultado = $registro_model->altaUsuario($usuario, $nombre, $apellido, $telefono, $correo, $contrasena, $sexo);
//el suario no existe, mensaje ok
//$resultado="el usuario no exixte";
//            }
//
//            break;
//
//        default:
//            break;
//    }
//}
echo $resultado;
?>