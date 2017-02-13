<?php

//enaut usarios taula ukitzen duten metod guztien implementazioa klase honetan
//egon behar da. login_model actualizar_datos_model eta abar.
class usuarios_model {

    public function __construct() {
        try {

            $this->mysqli = new mysqli('localhost', 'root', '', 'reto3');
            if ($this->mysqli->connect_errno) {
                throw new Exception('Error al conectar: ' . $this->mysqli->connect_error);
            }
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }

//mostrar perfil del usuario registrado cuando esta logeado.
    function mostrarPerfilUsuarios($usuario) {
        try {
            $query = "SELECT * FROM usuarios where usuario='" . $usuario . "'";
            $query_execute = $this->mysqli->query($query);

            if ($query_execute->num_rows) {

                $c = 0;
                while ($query_result = $query_execute->fetch_array()) {
                    $filas[$c] = $query_result;
                    $c++;
                }
                $usuario = json_encode($filas);
                print $usuario;
            } else {
                
            }
        } catch (Exception $ex) {
            throw $ex;
        }
    }

    ///////////realizar registro/////////
    //
        //erabiltzaile bat erregistratu

    public function altaUsuario($usuario, $nombre, $apellido, $telefono, $correo, $contrasena, $sexo, $coche,$foto) {
        try {
            $sql = "INSERT INTO usuarios(usuario,nombre,apellido,telefono,correo,foto,contrasena,sexo,coche,activo) VALUES('" . $usuario . "','" . $nombre . "','" . $apellido . "','" . $telefono . "','" . $correo . "','" . $foto . "','" . $contrasena . "','" . $sexo . "','" . $coche . "',0);";
            $res = $this->mysqli->query($sql);
            return true;
        } catch (Exception $ex) {
            throw $ex;
        }
    }

    //erabiltzailea existitzen den konprobatu
    public function existeUsuario($usuario) {
        $sql = "SELECT * FROM usuarios WHERE usuario = '" . $usuario . "'";
        $this->mysqli->query($sql);
        if ($this->mysqli->affected_rows == 1) {
            return TRUE;
        } else {
            return FALSE;
        }
    }
    
    public function traerEmail($usuario) {
        try {
            $query = "SELECT correo FROM usuarios WHERE usuario = '" . $usuario . "'";
            $resultSet = $this->mysqli->query($query);
            
            $lerroa = $resultSet->fetch_array();
            return $lerroa['correo'];
            
//--------------TAMBIEN SE PUEDE HACER USANDO FETCH_OBJECT------------            
//            $lerroa = $resultSet->fetch_object();
//            return $lerroa->correo;
        } catch (Exception $ex) {
            throw $ex;
        }
    }
    
    public function activarCuenta($usuario) {
        try {

            $sql = "UPDATE usuarios SET activo=1 WHERE usuario='".$usuario."'";

            $this->mysqli->query($sql);
        } catch (Exception $ex) {
            throw $ex;
        }
    }

    
    ///////////////////// LOGIN///////////




    public function consulta_usuarios() {
        try {
            $loginUsuario = $_POST['loginUsuario'];
            $loginContrasena = $_POST['loginContrasena'];
            $sql = "SELECT * FROM usuarios;";
            $res = $this->mysqli->query($sql);
            $filas = array();
            if ($res->num_rows != 0) {
                for ($i = 0; $i < $res->num_rows; $i++) {
                    $fila = $res->fetch_object();
                    $nombre = $fila->nombre;
                    $contrasena = $fila->contrasena;
                    $usuario = $fila->usuario;
                }
            }
            if ($loginUsuario == $usuario) {
                //Si el nombre existe: 
                if ($loginContrasena == $contrasena) {

                    if (isset($_SESSION['usuarioActual']) == TRUE) {
                        
                    } else {

                        $_SESSION['usuarioActual'] = NULL;
                    }

                    session_start();
                    // $_SESSION['nombreActual'] = $loginNombre;
                    //echo '<script language="javascript">alert($loginUsuario);</script>';
                    $_SESSION['usuarioActual'] = $loginUsuario;



//                            header("Location: index.php");


                    die();
                }
            } else {
                echo("No estas registrado");
            }
        } catch (Exception $ex) {
            throw $ex;
        }
    }

    ///// erabiltzailea eta pass ondo sartu dizen konprobatu

    public function validar($usuario, $contrasena) {
        $query = "select usuario from usuarios where usuario='$usuario' and contrasena='$contrasena' and activo=1";
        $result = $this->mysqli->query($query);
        if ($result->num_rows == 1) {
            return TRUE;
        } else {
            return FALSE;
        }
    }

//    public function rol($usuario, $contrasena) {
//        $query = "select rol from usuarios where usuario='$usuario' and contrasena='$contrasena'";
//        $result = $this->mysqli->query($query);
//        if ($result->num_rows == 1) {
//            return $result->fetch_object()->rol;
//        } else {
//            return FALSE;
//        }
//    }
//
//    public function erabiltzaileak() {
//        $select = "select * from usuarios";
//        $result = $this->mysqli->query($select);
//
//        while ($fila = $result->fetch_array()) {
//            $array_result[] = $fila;
//        }
//        return $array_result;
//    }
//
//    public function erabiltzailea($usuario) {
//        $select = "select * from usuarios where usuario=$usuario";
//        $result = $this->mysqli->query($select);
//
//        if ($result->num_rows == 1) {
//            return $result->fetch_object();
//        } else {
//            return FALSE;
//        }
//    }
    //////////////ACTUALIZAR DATOS
    /// perfileko datuak modifikatu

    public function actualizarDatos($usuario, $nombre, $apellido, $contrasena, $correo, $telefono, $coche, $descripcion) {
        try {

            $sql = "UPDATE usuarios SET nombre='$nombre', apellido='$apellido', telefono=$telefono, correo='$correo', descripcion='$descripcion', contrasena='$contrasena', coche='$coche' WHERE usuario='$usuario'";

            $res = $this->mysqli->query($sql);
            return $res;
        } catch (Exception $ex) {
            throw $ex;
        }
    }
    
    public function eliminarParada($usuario) {
        try {
            $sql = "DELETE FROM parada where usuario_conductor='$usuario';";
            $res = $this->mysqli->query($sql);
            return $res;
        } catch (Exception $ex) {
            throw $ex;
        }
    }
    public function eliminarViaje($usuario) {
        try {
            $sql = "DELETE FROM viaje where usuario='$usuario';";
            $res = $this->mysqli->query($sql);
            return $res;
        } catch (Exception $ex) {
            throw $ex;
        }
    }
    public function eliminarUsuario($usuario, $contrasena) {
        try {
            $sql = "DELETE FROM usuarios where usuario='$usuario' && contrasena='$contrasena';";
            $res = $this->mysqli->query($sql);
            return $res;
        } catch (Exception $ex) {
            throw $ex;
        }
    }

    public function disponibilidadCoche($usuario) {
        try {
            $sql = "SELECT coche FROM usuarios where usuario='$usuario';";
//            $res = $this->mysqli->query($sql);
//            echo mysql_num_fields($res);

            if ($res = $this->mysqli->query($sql)) {
                while ($obj = $res->fetch_object()) {
                    printf($obj->coche);
                }
            }
        } catch (Exception $ex) {
            throw $ex;
        }
    }
}
