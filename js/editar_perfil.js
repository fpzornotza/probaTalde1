



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
                    coche = $scope.usuarios[dato].coche;
                    descripcion = $scope.usuarios[dato].descripcion;


                }
                ;
                
                

            });

    
});
function visualizar_eliminar_usuario() {
    $("#confirmar_eliminar").css("display", "block");
}
function cancelar_eliminar_usuario() {
    $("#confirmar_eliminar").css("display", "none");
}
function eliminar_usuario(usuario, contrasena_eliminar) {
    contrasenaBD = $("#contrasenaBD").val();
    if (contrasenaBD == contrasena_eliminar) {
        var parametros = {
            "usuario": usuario,
            "contrasena": contrasenaBD
        };
        $.ajax({
            data: parametros,
            url: '../php/eliminar_parada.php',
            type: 'post',
            //async: false, cuando esta ASYNCRONO lo que esta fuera del AJAX no depende del ajax
//                      cuando esta SYNCRONO (async: false) ejecuta el ajax y despues el otro
            beforeSend: function () {
                $("#resultado").html("Procesando, espere por favor...");
            },
            success: function (response) {
                if (response === "1") {
                } else if (response === "0") {
                    alert("txarto");
                    //location.href ="camkladfklasdfkl";
                } else {
                    alert(response);
                }
                // alert(response);
                //$("#resultado").html(response); };

            }

        });
        $.ajax({
            data: parametros,
            url: '../php/eliminar_viaje.php',
            type: 'post',
            //async: false, cuando esta ASYNCRONO lo que esta fuera del AJAX no depende del ajax
//                      cuando esta SYNCRONO (async: false) ejecuta el ajax y despues el otro
            beforeSend: function () {
                $("#resultado").html("Procesando, espere por favor...");
            },
            success: function (response) {
                if (response === "1") {
                } else if (response === "0") {
                    alert("txarto");
                    //location.href ="camkladfklasdfkl";
                } else {
                    alert(response);
                }
                // alert(response);
                //$("#resultado").html(response); };

            }

        });
        $.ajax({
            data: parametros,
            url: '../php/eliminar_usuario.php',
            type: 'post',
            //async: false, cuando esta ASYNCRONO lo que esta fuera del AJAX no depende del ajax
//                      cuando esta SYNCRONO (async: false) ejecuta el ajax y despues el otro
            beforeSend: function () {
                $("#resultado").html("Procesando, espere por favor...");
            },
            success: function (response) {
                if (response === "1") {
                    location.href = "../index.html";
                } else if (response === "0") {
                    alert("txarto");
                    //location.href ="camkladfklasdfkl";
                } else {
                    alert(response);
                }
                // alert(response);
                //$("#resultado").html(response); };

            }

        });

        $.ajax({
            url: '../php/log_out.php',
            type: 'post',
            beforeSend: function () {
                $("#resultado").html("Procesando, espere por favor...");
            },
            success: function (response) {
                if (response.trim() == "salir") {
                    window.location.href = "../index.html";
                    $("#nav_no_logeado").css("display", "inline");
                    $("#nav_logeado").css("display", "none");
                } else {
                    alert("mal");
                }
            }
        });
    } else {
        $("#alert_mal_pass").css("display", "block");
    }

}
function visualizacionContrasena() {
    //    $(".visualizacionContrasena").css("visibility", "visible");
    $(".visualizacionContrasena").css("display", "table-row");

}




function comprobarContrasena() {
    contrasenaActual = $("#contrasenaActual").val();
    contrasenaBD = $("#contrasenaBD").val();
    
    if (contrasenaBD == contrasenaActual) {
        $(".visualizacionContrasena").css("display", "none");
        $(".visualizacionNuevaContrasena").css("display", "table-row");
        $(".visualizacionContrasena").css("display", "none");
        

    } else {
        $("#alert_mal_pass").css("display", "block");
    }
}











function actualizarDatosBD(usuario, nombre, apellido, nuevaContra, correo, telefono, descripcion) {
    if ($('#nuevoCoche').is(':checked')) {
        coche = 1;
    }
    else{
        coche = 0;
    }

    
        contrasena1 = $("#repetirContra").val();
        contrasena2 = $("#nuevaContra").val();
        if (contrasena1 === contrasena2 && contrasena1 !== "" && contrasena2 !== "") {
    
            if (usuario == "" || nombre == "" || apellido == "" || correo == "" || telefono == "") {
        $("#alert_mal_vacio").css("display", "block");
    } else {
        var parametros = {
            "usuario": usuario,
            "nombre": nombre,
            "apellido": apellido,
            "nuevaContra": nuevaContra,
            "correo": correo,
            "telefono": telefono,
            "coche": coche,
            "descripcion": descripcion

        };
        
            if (!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(correo))) {
                $("#alert_mal_correo").css("display", "block");
            } else {
                // apellido
                if (!(/^[a-z][a-z]*/.test(apellido))) {
                    $("#alert_mal_apellido").css("display", "block");

                } else {
                    //nombre
                    if (!(/^[a-z][a-z]*/.test(nombre))) {
                        $("#alert_mal_nombre").css("display", "block");
                    } else {
                        // telefono
                        if (!(/^\d{9}$/.test(telefono))) {
                            $("#alert_mal_numero").css("display", "block");
                        } else {

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
                                    if (response === "1") {

                                        location.href = "perfil_usuario1.html";

                                    } else if (response === "0") {
                                        //alert("txarto");
                                        //location.href ="camkladfklasdfkl";
                                    } else {
                                        alert(response);
                                    }
                                    // alert(response);
                                    //$("#resultado").html(response);

                                }

                            });
                        }
                    }
                }
            }
        
    }
        
    } else {
            $("#alert_mal_pass_iguales").css("display", "block");
        }

    
}