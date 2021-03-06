<?php

include_once 'pasajero_model.php';
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of usuarios
 *
 * @author Gorka
 */
class conductor_model {

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

    function mostrarPueblos() {
        try {
            $query = "SELECT * FROM pueblos";
            $query_execute = $this->mysqli->query($query);

            if ($query_execute->num_rows) {

                $c = 0;
                while ($query_result = $query_execute->fetch_array()) {
                    $filas[$c] = $query_result;
                    $c++;
                }
                $pueblos = json_encode($filas);
                return $pueblos;
            } else {
                
            }
        } catch (Exception $ex) {
            throw $ex;
        }
    }

    function mostrarZonas() {
        try {
            $query = "SELECT * FROM zonas";
            $query_execute = $this->mysqli->query($query);

            if ($query_execute->num_rows) {

                $c = 0;
                while ($query_result = $query_execute->fetch_array()) {
                    $filas[$c] = $query_result;
                    $c++;
                }
                $pueblos = json_encode($filas);
                return $pueblos;
            } else {
                
            }
        } catch (Exception $ex) {
            throw $ex;
        }
    }


    function mostrarViaje($usuario) {
        try {
            $viajes = NULL;
            $query = "SELECT * FROM viaje WHERE usuario =  '" . $usuario . "'";
            $result_viajes = $this->mysqli->query($query);

            if ($result_viajes->num_rows) {
                $i = 0;
                while ($viaje = $result_viajes->fetch_array()) {
                    //echo '<script language="javascript">alert("'.$viaje.'");</script>';
                    $pasajero_model = new pasajero_model();
                    $paradas = $pasajero_model->mostrarParadas($viaje['id_viaje']); //$this->mysqli->query($query);
                    $viaje['paradas'] = $paradas;
                    $viajes[$i] = $viaje;
                    $i++;
                }
                // $viaje = json_encode($viaje);

                return $viajes;
            } else {
                
            }
        } catch (Exception $ex) {
            throw $ex;
        }
    }


    public function crearViaje($usuario, $n_disponibles, $fecha, $salida, $zona) {
        try {
            $sql = "INSERT INTO viaje(usuario,n_disponibles,fecha,salida,zona) VALUES('" . $usuario . "','" . $n_disponibles . "','" . $fecha . "','" . $salida . "','" . $zona . "');";
            $res = $this->mysqli->query($sql);
            return $res;
        } catch (Exception $ex) {
            throw $ex;
        }
    }

 
    //crear parada
    public function crearParada1($pueblo, $parada, $hora, $minuto, $precio, $id_viaje) {
        try {
            $sql = "INSERT INTO parada(pueblo,parada,hora,minuto,precio,id_viaje) VALUES('  $pueblo  ','  $parada  ', $hora , $minuto  ,'  $precio  ', $id_viaje );";
            $res = $this->mysqli->query($sql);
            return $res;
        } catch (Exception $ex) {
            throw $ex;
        }
    }

    public function crearParada2($pueblo, $parada, $hora, $minuto, $precio, $id_viaje) {
        try {
            $sql = "INSERT INTO parada(pueblo,parada,hora,minuto,precio,id_viaje) VALUES('  $pueblo  ','  $parada  ', $hora , $minuto  ,'  $precio  ', $id_viaje );";
            $res = $this->mysqli->query($sql);
            return $res;
        } catch (Exception $ex) {
            throw $ex;
        }
    }
    function getIdViaje() {
        try {
            $query = "SELECT id_viaje FROM viaje ORDER BY id_viaje DESC limit 0,1";
            $query_execute = $this->mysqli->query($query);
         

            if ($query_execute->num_rows == 1) {

                $query_result = $query_execute->fetch_array();
                return $query_result['id_viaje'];
            } else {
                //txarto
            }
      } catch (Exception $ex) {
            throw $ex;
       }
    }

    public function crearParada3($pueblo, $parada, $hora, $minuto, $precio, $id_viaje) {
        try {
            $sql = "INSERT INTO parada(pueblo,parada,hora,minuto,precio,id_viaje) VALUES('  $pueblo  ','  $parada  ', $hora , $minuto  ,'  $precio  ', $id_viaje );";
            $res = $this->mysqli->query($sql);
            return $res;
        } catch (Exception $ex) {
            throw $ex;
        }
    }

    public function crearParada4($pueblo, $parada, $hora, $minuto, $precio, $id_viaje) {
        try {
            $sql = "INSERT INTO parada(pueblo,parada,hora,minuto,precio,id_viaje) VALUES('  $pueblo  ','  $parada  ', $hora , $minuto  ,'  $precio  ', $id_viaje );";
            $res = $this->mysqli->query($sql);
            return $res;
        } catch (Exception $ex) {
            throw $ex;
        }
    }

    public function borrarParada($id_parada) {
        try {
            $sql = "DELETE FROM parada WHERE id_parada=$id_parada";
            $res = $this->mysqli->query($sql);
            return $res;
        } catch (Exception $ex) {
            throw $ex;
        }
    }
    
    function borrarViajes() {
    try {
            $sql = "DELETE FROM viaje WHERE NOT EXISTS (SELECT * FROM parada WHERE parada.id_viaje = viaje.id_viaje);";
            $res = $this->mysqli->query($sql);
            return $res;
        } catch (Exception $ex) {
            throw $ex;
        }
    }

    public function actualizarParada($id_parada, $hora, $minuto, $pueblo, $parada, $precio) {
        try {
            for ($i = 0; $i < count($id_parada); $i++) {
                $sql = "UPDATE parada SET hora='$hora[$i]',minuto='$minuto[$i]',pueblo='$pueblo[$i]',parada='$parada[$i]',precio='$precio[$i]' where id_parada='$id_parada[$i]'";

                $res = $this->mysqli->query($sql);
               
            }
            return $res;
        } catch (Exception $ex) {
            throw $ex;
        }
    }

    public function actualizarViaje($salida, $zona, $fecha, $id_viaje, $n_disponibles) {
        try {
            for ($i = 0; $i < count($id_viaje); $i++) {
                $sql = "UPDATE viaje,parada  SET salida='$salida[$i]',zona='$zona[$i]',fecha='$fecha[$i]',n_disponibles='$n_disponibles[$i]' where viaje.id_viaje='$id_viaje[$i]'";

                $res = $this->mysqli->query($sql);
            }
            return $res;
        } catch (Exception $ex) {
            throw $ex;
        }
    }

    
   
     public function actualizarNivel($usuario){
        try {
                $sql = "UPDATE usuarios  SET nivel_conductor=nivel_conductor+1 where usuario='$usuario'";
                $res = $this->mysqli->query($sql); 
            return $res;
        } catch (Exception $ex) {
            throw $ex;
        }
    }
    
  
    


 function mostrarAlertas($usuario) {
        try {
            $query = "SELECT * FROM reservas,parada,viaje where reservas.id_parada=parada.id_parada AND parada.id_viaje=viaje.id_viaje AND viaje.usuario='".$usuario."'";
         $query_execute = $this->mysqli->query($query);

            if ($query_execute->num_rows) {

                $c = 0;
                while ($query_result = $query_execute->fetch_array()) {
                    $filas[$c] = $query_result;
                    $c++;
                }
                $reservas = json_encode($filas);
                return $reservas;
            } else {
                
            }
        } catch (Exception $ex) {
            throw $ex;
        }
    }
    function cambiar_estado_reserva($id_parada,$estado){
        try {
                $sql = "UPDATE reservas SET estado='".$estado."' where id_parada=".$id_parada.";";
                $res = $this->mysqli->query($sql); 
            return $res;
        } catch (Exception $ex) {
            throw $ex;
        }
    }
}
