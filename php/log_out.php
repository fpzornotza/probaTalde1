<?php
session_start();
$aaa = $_SESSION['username'];
$_SESSION['logeado'] = FALSE;
$_SESSION['username'] = NULL;
session_destroy();
//echo '<script language="javascript">alert('.$_SESSION['username'].');</script>'; 
//header("Location: ../index.html?mensaje=sesion finalizada");
return print("salir");