
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
include_once './usuarios_model.php';

$registro_model = new usuarios_model();

$emailhash = $_GET['codigo'];
$usuario = $_GET['usuario'];

$email = $registro_model->traerEmail($usuario);

if($emailhash == md5($email)){
    $registro_model->activarCuenta($usuario);
}
?>
        <h1> SU USUARIO HA SIDO VERIFICADA</h1>
        <br>
        <a href="../index.html">Ir a la pagina de inicio</a>
    </body>
</html>

