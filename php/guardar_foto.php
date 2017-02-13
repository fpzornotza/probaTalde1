<?php
include_once './conexion_foto.php';
$ruta = "../images/usuario/";
opendir($ruta);
$destino = $ruta.$_FILES['foto']['name'];
copy($_FILES['foto']['tmp_name'],$destino);
$nombre=$_FILES['foto']['name'];
session_start();
$usuario = $_SESSION['username']; // usuario logeado
$con=mysql_connect($server,$username,$password)or die("problemas al conectar al servidor");
	mysql_select_db($db,$con)or die("no existe la base de datos");
//	mysql_query("insert into usuarios(foto)values('$nombre')",$con);
        mysql_query("update usuarios set foto='$nombre' where usuario='" . $usuario . "'",$con);
        header("location:../html/cambiar_perfil_usuario.html")
?>
