/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//coger datos de bd tabla opiniones

//window.onload = function () {
//    usuario_recibir = getGET();
//    alert(usuario_recibir);
//    document.getElementById("mostrar_mensajes").innerHTML = usuario_recibir;
//};
//alert(getGET());
var miApp = angular.module('miApp', []);

miApp.controller('miControlador', function ($scope, $http) {
    
    $http.get("../php/mostrar_opiniones.php?usuario_recibir=" + getGET() + "")
            .success(function (data) {

                $scope.opiniones = data;
                
                for (dato in  $scope.opiniones) {
                    usuario_recibir = $scope.opiniones[dato].usuario_recibir;
                    usuario_enviar = $scope.opiniones[dato].usuario_enviar;
                    opinion = $scope.opiniones[dato].opinion;
                    id_opinion = $scope.opiniones[dato].id_opinion;
                    foto = $scope.opiniones[dato].foto;
                }
            }
            );
    
    
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
});
//function opiniones(usuario) {
//    location.href = "opiniones.html?usuario=" + usuario + "";
//
//}
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
        return get.usuario;
    }
}


function enviarMensaje() {
    var comentario = document.getElementById("comentario").value
    //alert(document.getElementById("comentario").value);


    var parametros2 = {
        "usuario_recibir": getGET(),
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
location.href = "opiniones.html?usuario="+getGET()+"";
}
function Salir(){
    location.href = "pasajeros.html";
}




