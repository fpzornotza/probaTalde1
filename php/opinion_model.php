<?php

//

class opinion_model {

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

    function enviarMensaje($comentario, $usuario_recibir, $usuario) {
        try {
            $sql = "INSERT INTO opiniones(opinion, usuario_recibir,usuario_enviar) VALUES('" . $comentario . "','" . $usuario_recibir . "','" . $usuario . "')";
            $this->mysqli->query($sql);
            echo '<script language="javascript">alert("' . $sql . '");</script>';
        } catch (Exception $ex) {
            throw $ex;
        }
    }

    function getMensaje($usuario_recibir) {

        try {
            $query = "select opiniones.*,usuarios.foto from opiniones,usuarios where usuario_recibir='" . $usuario_recibir . "'and opiniones.usuario_enviar=usuarios.usuario";
            $query_execute = $this->mysqli->query($query);

            if ($query_execute->num_rows) {

                $c = 0;
                while ($query_result = $query_execute->fetch_array()) {
                    $filas[$c] = $query_result;
                    $c++;
                }
                $opiniones = json_encode($filas);
                print $opiniones;
            } else {
                
            }
        } catch (Exception $ex) {
            throw $ex;
        }
    }

}
