function cogerViaje() {


//parada1
    var seleccionado = document.getElementsByClassName("id_viaje_seleccionado");
    for (var i = 0; i < seleccionado.length; i++) {

        if (seleccionado[i].checked == true) {
            var id_viaje = seleccionado[i].value;

        }
        else{
//            document.getElementById("alert_mal_seleccionar").style.display = "block";
        }
    }
    var parametros = {
        "id_viaje": id_viaje
    };


    $.ajax({
        data: parametros,
        url: '../php/pasajero_coger_viaje.php',
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
                alert("Sitio reservado");
            }
        }
    });
    var id_parada1 = document.getElementsByClassName("idparada_seleccionado");
    var parada_seleccionado = document.getElementsByClassName("id_viaje_seleccionado");

    for (var i = 0; i < id_parada1.length; i++) {
        if (parada_seleccionado[i].checked == true) {
            var id_parada = id_parada1[i].textContent.trim();
        }
    }
    var parametros2 = {
        "id_parada": id_parada
    }

    $.ajax({
        data: parametros2,
        url: '../php/hacer_reserva.php',
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
//                alert("Sitio reservado");
            }
        }
    });

    location.href = "pasajeros.html";
}


var miApp = angular.module('miApp', []);

miApp.controller('miControlador', function ($scope, $http) {

    $http.get("../php/perfil_usuario.php")
            .success(function (data) {
                $scope.usuarios = data;
                // alert($scope.usuarios);

            });
    $http.get("../php/ordenarPorZonas.php?zona=" + getGET() + "")
            .success(function (data) {
                $scope.ordenarPorZonas = data;
                for (dato in  $scope.ordenarPorZonas) {
                    id_parada = $scope.ordenarPorZonas[dato].id_parada;
                    pueblo = $scope.ordenarPorZonas[dato].pueblo;
                    parada = $scope.ordenarPorZonas[dato].parada;
                    hora = $scope.ordenarPorZonas[dato].hora;
                    minuto = $scope.ordenarPorZonas[dato].minuto;
                    precio = $scope.ordenarPorZonas[dato].precio;
                    id_viaje = $scope.ordenarPorZonas[dato].id_viaje;
                    zona = $scope.ordenarPorZonas[dato].zona;
                    salida = $scope.ordenarPorZonas[dato].salida;
                    fecha = $scope.ordenarPorZonas[dato].fecha;
                    usuario = $scope.ordenarPorZonas[dato].usuario;
                    n_disponibles = $scope.ordenarPorZonas[dato].n_disponibles;
                    reputacion = $scope.ordenarPorZonas[dato].reputacion;
                    sexo = $scope.ordenarPorZonas[dato].sexo;
                    foto = $scope.ordenarPorZonas[dato].foto
                    //nivel conductor
                    if ($scope.ordenarPorZonas[dato].nivel_conductor < 10) {
                        $scope.ordenarPorZonas[dato].nivel_conductor = "principiante";
                    }
                    if ($scope.ordenarPorZonas[dato].nivel_conductor < 20 && $scope.ordenarPorZonas[dato].nivel_conductor > 10) {
                        $scope.ordenarPorZonas[dato].nivel_conductor = "experto";
                    }
                    if ($scope.ordenarPorZonas[dato].nivel_conductor > 20) {
                        $scope.ordenarPorZonas[dato].nivel_conductor = "profesional";
                    }


                }
                ;
            });
    $scope.MostrarPerfilUsuario = function (usuarioPerfil) {

        $http.get('../php/pasajero_usuario_perfil.php?usuario=' + usuarioPerfil + '')
                .success(function (data) {
                    $scope.perfiles = data;

                    for (dato in  $scope.perfiles) {
                        usuario = $scope.perfiles[dato].usuario;
                        nombre = $scope.perfiles[dato].nombre;
                        apellido = $scope.perfiles[dato].apellido;
                        sexo = $scope.perfiles[dato].sexo;
                        foto = $scope.perfiles[dato].foto;
                        descripcion = $scope.perfiles[dato].descripcion;
                    }
                });
        document.getElementById("DatosUsuarioViaje").style.display = "block";
    };

    $http.get("../php/perfil_usuario_seleccionado.php")
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
    $http.get("../php/pasajero.php")
            .success(function (data) {
                $scope.TodasLasParadas = data;
                for (dato in  $scope.TodasLasParadas) {
                    id_parada = $scope.TodasLasParadas[dato].id_parada;
                    pueblo = $scope.TodasLasParadas[dato].pueblo;
                    parada = $scope.TodasLasParadas[dato].parada;
                    hora = $scope.TodasLasParadas[dato].hora;
                    minuto = $scope.TodasLasParadas[dato].minuto;
                    precio = $scope.TodasLasParadas[dato].precio;
                    id_viaje = $scope.TodasLasParadas[dato].id_viaje;
                    zona = $scope.TodasLasParadas[dato].zona;
                    salida = $scope.TodasLasParadas[dato].salida;
                    fecha = $scope.TodasLasParadas[dato].fecha;
                    usuario = $scope.TodasLasParadas[dato].usuario;
                    n_disponibles = $scope.TodasLasParadas[dato].n_disponibles;
                    reputacion = $scope.TodasLasParadas[dato].reputacion;
                    sexo = $scope.TodasLasParadas[dato].sexo;
                    foto = $scope.TodasLasParadas[dato].foto
                    //nivel conductor
                    if ($scope.TodasLasParadas[dato].nivel_conductor < 10) {
                        $scope.TodasLasParadas[dato].nivel_conductor = "principiante";
                    }
                    if ($scope.TodasLasParadas[dato].nivel_conductor < 20 && $scope.TodasLasParadas[dato].nivel_conductor > 10) {
                        $scope.TodasLasParadas[dato].nivel_conductor = "experto";
                    }
                    if ($scope.TodasLasParadas[dato].nivel_conductor > 20) {
                        $scope.TodasLasParadas[dato].nivel_conductor = "profesional";
                    }
                }
                ;
            });

    $http.get("../php/mostrar_reservas.php")
            .success(function (data) {
                $scope.reservas = data;

                for (dato in  $scope.reservas) {
                    usuario = $scope.reservas[dato].usuario;
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
function MisReservas() {
    document.getElementById("CajatodasLasParadas").style.display = "none";
    document.getElementById("viajesReservados").style.display = "block";
    document.getElementById("salirreservas").style.display = "block";
    
}
function salirReservas() {
    document.getElementById("CajatodasLasParadas").style.display = 'block';
    document.getElementById("viajesReservados").style.display = 'none';
    document.getElementById("salirreservas").style.display = "none";
    document.getElementById("sin_resultado").style.display = 'none';
}

//opiniones


function enviarMensaje() {
    var comentario = document.getElementById("comentario").value;
    location.href = "pasajeros.html";

    var parametros2 = {
        "usuario_recibir": usuario_recibir,
        "comentario": comentario

    }
    $.ajax({
        data: parametros2,
        url: '../php/enviar_opinion.php',
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
                alert("Sitio reservado");
            }
        }
    });

}

function opiniones(usuario) {
    location.href = "opiniones.html?usuario=" + usuario + "";

}
function getGET() {

    var loc = document.location.href;

    if (loc.indexOf('?') > 0) {
        var getString = loc.split('?')[1];
        var GET = getString.split('&');
        var get = {};
        for (var i = 0, l = GET.length; i < l; i++) {
            var tmp = GET[i].split('=');
            get[tmp[0]] = unescape(decodeURI(tmp[1]));
        }
        return get.zona;
    }
}
function ordenarPorZonas(zona) {


    location.href = "html/pasajeros.html?zona=" + zona + "";

}

//function quitarVacio(){
//    valor_parada = document.getElementById("salirreservas").value;
//    if(valor_parada == ""){
//        document.getElementById("alerta_reservas").style.display = 'none';
//        document.getElementById("sin_resultado").style.display = 'block';
//    }
//}

window.onload = function () {
    var loc = document.location.href;
    if (loc.indexOf('?') == -1) {
        document.getElementById("buscarPorZona").style.display = "none";

    } else {
        document.getElementById("todasLasParadas").style.display = "none";
        document.getElementById("buscadorZona").style.display = "none";
    }
};