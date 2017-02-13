function permitirAcceso() {
    $.ajax({
        url: 'php/comprobar_session.php',
        type: 'post',
        beforeSend: function () {
//            $("#resultado").html("Procesando, espere por favor...");
        },
        success: function (response) {
            if (response.length > 0) {
                document.getElementById('idlogin').style.display = 'block';
            } else {
                $.ajax({
                    url: 'php/disponibilidad_coche.php',
                    type: 'post',
//        async: false,
                    beforeSend: function () {
                        $("#resultado").html("Procesando, espere por favor...");
                    },
                    success: function (response) {
                        //alert(response);
                        $("#resultado").html(response);
                        //nombre esiste o no
                        if (response == 1) {
                            location.href = "html/conductor.html";
                        } else {

                            alert("Debes de ser conductor");
                        }
                    }
                });
            }
        }
    });
}
function permitirAccesoOtros() {
    $.ajax({
        url: '../php/comprobar_session.php',
        type: 'post',
        beforeSend: function () {
//            $("#resultado").html("Procesando, espere por favor...");
        },
        success: function (response) {
            if (response.length > 0) {
                document.getElementById('idlogin').style.display = 'block';
            } else {
                $.ajax({
                    url: '../php/disponibilidad_coche.php',
                    type: 'post',
//        async: false,
                    beforeSend: function () {
                        $("#resultado").html("Procesando, espere por favor...");
                    },
                    success: function (response) {
                        //alert(response);
                        $("#resultado").html(response);
                        //nombre esiste o no
                        if (response == 1) {
                            location.href = "conductor.html";
                        } else {

                            alert("Debes de ser conductor");
                        }
                    }
                });
            }
        }
    });
}

function mostrarCrearViaje() {
    document.getElementById("formConductor").style.display = "block";
    document.getElementById("misViajes").style.display = "none";
    document.getElementById("botonesConductor").style.display = "none";
}
var j = 2;

function duplicar() {
    if (j != 6) {
        alert(j);
        document.getElementById("paradaDiv" + j + "").style.display = "block";

        j++;
    }
}

function duplicarEliminar() {

    if (j != 2) {
        j--;

        document.getElementById("paradaDiv" + j + "").style.display = "none";
        document.getElementById("pueblo" + j + "").value = "ABADINO";
        document.getElementById("hora" + j + "").value = "7";
        document.getElementById("minutos" + j + "").value = "00";
        document.getElementById("parada" + j + "").value = "";
        document.getElementById("precio" + j + "").value = "";


    }
}

var miApp = angular.module('miApp', []);

miApp.controller('miControlador', function ($scope, $http) {

    $scope.mensaje = "hola";
    $http.get("../php/perfil_usuario.php")
            .success(function (data) {
                $scope.usuarios = data;
                // alert($scope.usuarios);

            });

    $http.get("../php/conductor.php")
            .success(function (data) {
                $scope.pueblos = data;
                // alert(data);

                for (dato in  $scope.pueblos) {

                    nombre_pueblo = $scope.pueblos[dato].nombre_pueblo;
                    id_zona = $scope.pueblos[dato].id_zona;
                }
                ;
            });

    $http.get("../php/conductor_zonas.php")
            .success(function (data) {
                $scope.zonas = data;
                // alert(data);
                for (dato in  $scope.zonas) {

                    nombre_zona = $scope.zonas[dato].nombre_zona;
                    id_zona = $scope.zonas[dato].id_zona;

                }
                ;
            });

    $http.get("../php/viaje.php")

            .success(function (data) {
                $scope.viajes = data;
                for (dato in  $scope.viajes) {
                    id_viaje = $scope.viajes[dato].id_viaje;
                    fecha = $scope.viajes[dato].fecha;
                    n_disponibles = $scope.viajes[dato].n_disponibles;
                    usuario = $scope.viajes[dato].usuario;
                    comentario = $scope.viajes[dato].comentario;
                    id_zona = $scope.viajes[dato].id_zona;
                    salida = $scope.viajes[dato].salida;
                    // alert(id_viaje);
                    $scope.paradas = $scope.viajes[dato].paradas;
                    for (i in  $scope.paradas) {
                        pueblo = String($scope.paradas[i].pueblo);
                        parada = String($scope.viajes[dato].paradas[i].parada);
                    }
                }
            });
//$http.get("../php/conductor_getIdViaje.php")
//
//              .success(function (data) {
// id_viaje_ultimo=data;
//               
//            });
//  

    $http.get("../php/mostrar_alertas.php")
            .success(function (data) {
                $scope.reservas = data;

                for (dato in  $scope.reservas) {
                    pasajero = $scope.reservas[dato].pasajero;
                    id_parada = $scope.reservas[dato].id_parada;
                    pueblo = $scope.reservas[dato].pueblo;
                    parada = $scope.reservas[dato].parada;
                    hora = $scope.reservas[dato].hora;
                    minuto = $scope.reservas[dato].minuto;
                    precio = $scope.reservas[dato].precio;
                    fecha = $scope.reservas[dato].fecha;

                }
            });
});

function realizaProceso(usuario, salida, zona, n_disponibles) {

    var fecha = document.getElementById("fecha").value;

//parada1
    var pueblo1 = document.getElementById("pueblo1").value;
    var parada1 = document.getElementById("parada1").value;

    var hora1 = document.getElementById("hora1").value;
    var minuto1 = document.getElementById("minutos1").value;
//    var hora1 = [hora1, minutos1];

    var precio1 = document.getElementById("precio1").value;
//parada2
    var pueblo2 = document.getElementById("pueblo2").value;
    var parada2 = document.getElementById("parada2").value;

    var hora2 = document.getElementById("hora2").value;
    var minuto2 = document.getElementById("minutos2").value;
//    var hora2 = [hora2, minutos2];

    var precio2 = document.getElementById("precio2").value;
//parada3
    var pueblo3 = document.getElementById("pueblo3").value;
    var parada3 = document.getElementById("parada3").value;

    var hora3 = document.getElementById("hora3").value;
    var minuto3 = document.getElementById("minutos3").value;
//    var hora3 = [hora3, minutos3];

    var precio3 = document.getElementById("precio3").value;

//parada4
    var pueblo4 = document.getElementById("pueblo4").value;
    var parada4 = document.getElementById("parada4").value;

    var hora4 = document.getElementById("hora4").value;
    var minuto4 = document.getElementById("minutos4").value;
//    var hora4 = [hora4, minutos4];

    var precio4 = document.getElementById("precio4").value;

    // var nuevo_id_viaje = id_viaje_ultimo;

    //alert(nuevo_id_viaje);

    var parametros = {
        "usuario": usuario,
        "salida": salida,
        "zona": zona,
        "fecha": fecha,
        "n_disponibles": n_disponibles,
        //"nuevo_id_viaje": nuevo_id_viaje,
        // parada1
        "pueblo1": pueblo1,
        "parada1": parada1,
        "hora1": hora1,
        "minuto1": minuto1,
        "precio1": precio1,
        // parada2
        "pueblo2": pueblo2,
        "parada2": parada2,
        "hora2": hora2,
        "minuto2": minuto2,
        "precio2": precio2,
        // parada3
        "pueblo3": pueblo3,
        "parada3": parada3,
        "hora3": hora3,
        "minuto3": minuto3,
        "precio3": precio3,
        // parada4
        "pueblo4": pueblo4,
        "parada4": parada4,
        "hora4": hora4,
        "minuto4": minuto4,
        "precio4": precio4
    };

    //alert(nuevo_id_viaje)
    $.ajax({
        data: parametros,
        url: '../php/conductor_crearViaje.php',
        type: 'post',
        async: false,
        beforeSend: function () {
            $("#resultado").html("Procesando, espere por favor...");
        },
        success: function (response) {
            alert(response);

            $("#resultado").html(response);
            //nombre esiste o no
            if (response == 1) {
                alert("todo bien");
            }
        }
    });

    location.href = "conductor.html";
}









function botonCancelar() {

    location.href = "conductor.html";
}

function borrarParadaSeleccionada() {

//parada1
    var seleccionado = document.getElementsByClassName("seleccionado");

    for (var i = 0; i < seleccionado.length; i++) {

        if (seleccionado[i].checked == true) {
            var id_parada = seleccionado[i].value;
            //alert(id_parada);


            var parametros = {
                "id_parada": id_parada
            };

            $.ajax({
                data: parametros,
                url: '../php/conductor_borrar_parada.php',
                type: 'post',
                async: false,
                beforeSend: function () {
                    $("#resultado").html("Procesando, espere por favor...");
                },
                success: function (response) {
                    //alert(response);
                    $("#resultado").html(response);
                    //nombre esiste o no
                    if (response == 1) {
                        alert("todo bien");
                    }
                }
            });
        }
    }
    location.href = "conductor.html";
}

function editarViaje() {
    document.getElementById("misViajes").style.display = "none";
    document.getElementById("botonesConductor").style.display = "none";

    var seleccionado = document.getElementsByClassName("seleccionado");
    var paradaSeleccionado = document.getElementsByClassName("editarParadas");


    var control = 0;
    for (var i = 0; i < seleccionado.length; i++) {
        if (seleccionado[i].checked == true) {
            control = 1
            alert(seleccionado[i].value);
            paradaSeleccionado[i].style.display = "block";

        } else {
//          paradaSeleccionado[i].style.display = "none";
        }


    }

    if (control != 1) {
        document.getElementById("alert_mal_seleccionar").style.display = "block";
    } else {
        document.getElementById("botonesCambiar").style.display = "block";
    }

}

function actualizarParada() {
    var seleccionado = document.getElementsByClassName("seleccionado");


    //var usuario = document.getElementById("cambiar_usuario").value;
    var id_parada = document.getElementsByClassName("id_parada");
    var id_viaje = document.getElementsByClassName("id_viaje");

    var salida = document.getElementsByClassName("cambiar_salida");
    var zona = document.getElementsByClassName("cambiar_zona");
    var fecha = document.getElementsByClassName("cambiar_fecha");

    var hora = document.getElementsByClassName("cambiar_hora");
    var n_disponibles = document.getElementsByClassName("cambiar_n_disponibles");
    var minuto = document.getElementsByClassName("cambiar_minuto");

    var parada = document.getElementsByClassName("cambiar_parada");
    var precio = document.getElementsByClassName("cambiar_precio");
    var pueblo = document.getElementsByClassName("cambiar_pueblo");





//id_parada
    for (var i = 0; i < id_parada.length; i++) {
        if (seleccionado[i].checked === true) {
            var id_parada = [id_parada[i].value];
        }
    }

    //id_viaje
    for (var i = 0; i < id_viaje.length; i++) {
        if (seleccionado[i].checked === true) {
            var id_viaje = [id_viaje[i].value];
        }
    }

    //salida
    for (var i = 0; i < salida.length; i++) {
        if (seleccionado[i].checked === true) {
            var salida = [salida[i].value];
        }
    }

    //n_disponibles
    for (var i = 0; i < n_disponibles.length; i++) {
        if (seleccionado[i].checked === true) {
            var n_disponibles = [n_disponibles[i].value];
        }
    }

//zona
    for (var i = 0; i < zona.length; i++) {
        if (seleccionado[i].checked === true) {
            var zona = [zona[i].value];
        }
    }
    //id_parada
    for (var i = 0; i < fecha.length; i++) {
        if (seleccionado[i].checked === true) {
            var fecha = [fecha[i].value];
        }
    }
    //minuto
    for (var i = 0; i < minuto.length; i++) {
        if (seleccionado[i].checked === true) {
            var minuto = [minuto[i].value];
        }
    }
    //hora
    for (var i = 0; i < hora.length; i++) {
        if (seleccionado[i].checked === true) {
            var hora = [hora[i].value];
        }
    }
    //precio
    for (var i = 0; i < precio.length; i++) {
        if (seleccionado[i].checked === true) {
            var precio = [precio[i].value];
        }
    }
    //parada
    for (var i = 0; i < parada.length; i++) {
        if (seleccionado[i].checked === true) {
            var parada = [parada[i].value];
        }
    }
    //pueblo
    for (var i = 0; i < pueblo.length; i++) {
        if (seleccionado[i].checked === true) {
            var pueblo = [pueblo[i].value];
        }
    }


    var parametros = {
        "usuario": usuario,
        "id_parada": id_parada,
        "id_viaje": id_viaje,
        "salida": salida,
        "zona": zona,
        "fecha": fecha,
        "pueblo": pueblo,
        "parada": parada,
        "hora": hora,
        "minuto": minuto,
        "precio": precio,
        "n_disponibles": n_disponibles
    };

    $.ajax({
        data: parametros,
        url: '../php/conductor_editar_paradas.php',
        type: 'post',
        async: false,
        beforeSend: function () {
            $("#resultado").html("Procesando, espere por favor...");

        },
        success: function (response) {
            //  alert(response);
            $("#resultado").html(response);
            //nombre esiste o no
            if (response == 1) {
                //     alert("todo bien");
            }
        }
    });

    location.href = "conductor.html";
}

//function filtrar() {
//
//    var fechaViaje = document.getElementsByClassName("fechaViaje");
//    var fechaParada = document.getElementsByClassName("fechaParada");
//    
//     var idParada = document.getElementsByClassName("idParada");
//var parada =document.getElementsByClassName("contacto");
//
//
//    for (var i = 0; i < fechaViaje.length; i++) {
//
//        for (var x = 0; x < fechaParada.length; x++) {
//            alert(idParada[x].value+""+fechaParada[x].value +"  "+ fechaViaje[i].value);
// if(idParada[0].value==idParada[x].value){
//                alert("sdsdsd"); 
//            if (fechaParada[x].value != fechaViaje[i].value) {
//                  parada[x].style.display= "none";
//                  alert("diferentes");
//              }       
//      
//               }
//                
//            
////
//        }
//
//    }
//}
function MisAlertas() {

    document.getElementById("misViajes").style.display = 'none';
    document.getElementById("botonesConductor").style.display = 'none';
    document.getElementById("misAlertas").style.display = 'block';
     document.getElementById("tituloa1").innerHTML="MIS ALERTAS";
    //alert(usuario);

}
function salirAlertas() {
    document.getElementById("misViajes").style.display = 'block';
    document.getElementById("botonesConductor").style.display = 'block';
    document.getElementById("misAlertas").style.display = 'none';
    document.getElementById("sin_resultado").style.display = 'none';
     document.getElementById("tituloa1").innerHTML="MIS VIAJES";
}
function aceptarAlertas(id_parada_reserva) {
    var parametro_aceptado = {
        "id_parada": id_parada_reserva,
        "estado": "aceptado"
    };
    $.ajax({
        data: parametro_aceptado,
        url: '../php/cambiar_estado_reserva.php',
        type: 'post',
//        async: false,
        beforeSend: function () {
            $("#resultado").html("Procesando, espere por favor...");
        },
        success: function () {

        }
    });
location.href = "conductor.html";
}
function rechazarAlertas(id_parada_reserva) {
    var parametro_rechazado = {
        "id_parada": id_parada_reserva,
        "estado": "rechazado"
    };
    $.ajax({
        data: parametro_rechazado,
        url: '../php/cambiar_estado_reserva.php',
        type: 'post',
//        async: false,
        beforeSend: function () {
            $("#resultado").html("Procesando, espere por favor...");
        },
        success: function () {

        }
    });
    location.href = "conductor.html";
}

function quitarVacio(){
    valor_parada = document.getElementById("id_parada_quitar").value;
    if(valor_parada == ""){
        document.getElementById("alerta_reservas").style.display = 'none';
        document.getElementById("sin_resultado").style.display = 'block';
    }
}