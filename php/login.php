       <?php
       session_start();
if($_SESSION['logeado'] == TRUE){   ////////////COMPRUEBA QUE EL USUARIO ESTA LOGEADO///////////

        include_once './usuarios_model.php';

        $login_model = new usuarios_model();

        //$login_vista->cargarFormulario();

        $usuario = $_POST['loginUsuario'];
        $contrasena = $_POST['loginContrasena'];

        
        if ($login_model->validar($usuario, $contrasena)) {
            session_start();
            $_SESSION['logeado'] = TRUE;
            $_SESSION['username'] = $usuario;
            //0 user y 1 admin
            //$_SESSION['rol'] = $login_model->rol($usuario, $contrasena);
            
            print("bien");
           // header("Location: ../index_login.html");
        } else {
          //  header("Location: ../index.html?mensaje=usuario o pass mal");
            print("mal");
        }
}