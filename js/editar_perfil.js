



var miApp = angular.module('miApp', []);

miApp.controller('miControlador', function ($scope, $http) {

    $scope.mensaje = "hola";
    $http.get("../php/perfil_usuario.php")
            .success(function (data) {
                $scope.usuarios = data;


//                var usuarioDatos= JSON.stringify($scope.usuarios);
//            alert(usuarioDatos[0]);


                for (dato in  $scope.usuarios) {

                    usuario = $scope.usuarios[dato].usuario;
                    nombre = $scope.usuarios[dato].nombre;
                    contrasena = $scope.usuarios[dato].contrasena;
                    apellido = $scope.usuarios[dato].apellido;
                    correo = $scope.usuarios[dato].correo;
                    telefono = $scope.usuarios[dato].telefono;
                    sexo = $scope.usuarios[dato].sexo;
                    descripcion = $scope.usuarios[dato].descripcion;


                }
                ;



            });


});
function visualizacionContrasena() {
    //    $(".visualizacionContrasena").css("visibility", "visible");
    $(".visualizacionContrasena").css("display", "table-row");

}




function comprobarContrasena() {
    variableContrasena = 0;
    contrasenaActual = $("#contrasenaActual").val();
    if (contrasena == contrasenaActual) {
        alert("bien");
        $(".visualizacionContrasena").css("display", "none");
        $("#nuevaContrasena").css("border", "3px solid red");
        $("#repetirContrasena").css("border", "3px solid red")
        $(".visualizacionNuevaContrasena").css("display", "table-row");
        $(".visualizacionContrasena").css("display", "none");
        variableContrasena = 1;

    } else {
        alert("mal");
    }
}



function comprobarNuevaConrasena() {

    if (variableContrasena == 1) {
        contrasena1 = $("#repetirContra").val();
        contrasena2 = $("#nuevaContra").val();
//        alert(contrasena1);
//        alert(contrasena2);
        if (contrasena1 == contrasena2 && contrasena1 != "" && contrasena2 != "") {


        } else {
            alert(" las contraseñas tienen que ser iguales")
        }
    }

}








function actualizarDatosBD(usuario, nombre, apellido, nuevaContra, correo, telefono, descripcion) {
    var parametros = {
        "usuario": usuario,
        "nombre": nombre,
        "apellido": apellido,
        "nuevaContra": nuevaContra,
        "correo": correo,
       "telefono": telefono,
       "descripcion": descripcion

    };

    $.ajax({
        data: parametros,
        url: '../php/actualizar_datos.php',
        type: 'post',
        //async: false, cuando esta ASYNCRONO lo que esta fuera del AJAX no depende del ajax
//                      cuando esta SYNCRONO (async: false) ejecuta el ajax y despues el otro
        beforeSend: function () {
            $("#resultado").html("Procesando, espere por favor...");
        },
        success: function (response) {
            if (response === "1"){
                alert("ondo");
                location.href="perfil_usuario1.html";
            }else if(response === "0"){
                alert("txarto");
                //location.href ="camkladfklasdfkl";
            }else{
                alert(response);
            }
           // alert(response);
            //$("#resultado").html(response);

        }

    });

}