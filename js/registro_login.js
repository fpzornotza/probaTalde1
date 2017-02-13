$(document).ready(function () {
//--------------------REGISTRAR USUARIOS-----------------
    $("#registrar_usu").click(function () {
        usuario = $('#usuario').val();
        nombre = $('#nombre').val();
        apellido = $('#apellido').val();
        contrasena = $('#contrasena').val();
        contrasena1 = $('#contrasena1').val();
        correo = $('#correo').val();
        sexo = $('#sexo').val();
        coche = $('#coche').val();
        telefono = $('#telefono').val();
//    if (parametros_requeridos_nok(usuario, nombre, apellido, contrasena, contrasena1, correo, sexo, telefono)) {
//        alert("mal");
//    } else {
        if (usuario == "" || nombre == "" || apellido == "" || contrasena == "" || contrasena1 == "" || correo == "" || sexo == "" || telefono == "") {
            $("#alert_mal_vacio_registrar").css("display", "block");
            $("#id02").css("display", "none");
        } else {
            var parametros = {
                "usuario": usuario,
                "nombre": nombre,
                "apellido": apellido,
                "contrasena": contrasena,
                "contrasena1": contrasena1,
                "correo": correo,
                "sexo": sexo,
                "coche": coche,
                "telefono": telefono,
                "foto": "perfil_defecto.jpg"

            };

            if (!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(correo))) {
                $("#alert_mal_correo_registrar").css("display", "block");
                $("#id02").css("display", "none");
            } else {
                // apellido
                if (!(/^[a-z][a-z]*/.test(apellido))) {
                    $("#alert_mal_apellido_registrar").css("display", "block");
                    $("#id02").css("display", "none");
                    document.getElementById('#apellido').style.backgroundColor = "red";
                } else {
                    //nombre
                    if (!(/^[a-z][a-z]*/.test(nombre))) {
                        $("#alert_mal_nombre_registrar").css("display", "block");
                        $("#id02").css("display", "none");
                    } else {
                        // telefono
                        if (!(/^\d{9}$/.test(telefono))) {
                            $("#alert_mal_numero_registrar").css("display", "block");
                            $("#id02").css("display", "none");
                        } else {
                            //contraseña
                            if (contrasena1 == contrasena) {


                                $.ajax({
                                    data: parametros,
                                    url: '../php/registro.php',
                                    type: 'post',
                                    beforeSend: function () {
                                        $("#resultado").html("Procesando, espere por favor...");
                                    },
                                    success: function (response) {
                                        $("#resultado").html(response);
                                        //nombre esiste o no
                                        if (response == 1) {

//                                            $('#id02').css("display","none");
//                                            $('#usuario').val("");
//                                            $('#nombre').val("");
//                                            $('#apellido').val("");
//                                            $('#contrasena').val("");
//                                            $('#contrasena1').val("");
//                                            $('#correo').val("");
//                                            $('#sexo').val("");
//                                            $('#telefono').val();
                                            document.getElementById('id02').style.display = "none";
                                            document.getElementById('usuario').value = "";
                                            document.getElementById('nombre').value = "";
                                            document.getElementById('apellido').value = "";
                                            document.getElementById('contrasena').value = "";
                                            document.getElementById('contrasena1').value = "";
                                            document.getElementById('correo').value = "";
                                            document.getElementsByName('sexo').value = "";
                                            document.getElementById('coche').checked = false;
                                            document.getElementById('telefono').value = "";
                                        } else {
                                            $("#alert_mal_usuario_repetido").css("display", "block");
                                            $("#id02").css("display", "none");
                                        }
                                    }
                                });
                            } else {
                                $("#alert_mal_pass_iguales_registrar").css("display", "block");
                                $("#id02").css("display", "none");
                            }
                        }
                    }
                }
            }
//    }
        }

    });

    $("#registrar_usu_index").click(function () {
        usuario = $('#usuario').val();
        nombre = $('#nombre').val();
        apellido = $('#apellido').val();
        contrasena = $('#contrasena').val();
        contrasena1 = $('#contrasena1').val();
        correo = $('#correo').val();
        sexo = $('#sexo').val();
        coche = $('#coche').val();
        telefono = $('#telefono').val();


//    if (parametros_requeridos_nok(usuario, nombre, apellido, contrasena, contrasena1, correo, sexo, telefono)) {
//        alert("mal");
//    } else {
        if ($('#coche').is(':checked')) {
            coche = 1;
        }

        if (usuario == "" || nombre == "" || apellido == "" || contrasena == "" || contrasena1 == "" || correo == "" || sexo == "" || telefono == "") {
            $("#alert_mal_vacio_registrar").css("display", "block");
            $("#id02").css("display", "none");
        } else {
            var parametros = {
                "usuario": usuario,
                "nombre": nombre,
                "apellido": apellido,
                "contrasena": contrasena,
                "contrasena1": contrasena1,
                "correo": correo,
                "sexo": sexo,
                "coche": coche,
                "telefono": telefono,
                "foto": "perfil_defecto.jpg"

            };

            if (!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(correo))) {
                $("#alert_mal_correo_registrar").css("display", "block");
                $("#id02").css("display", "none");
            } else {
                // apellido
                if (!(/^[a-z][a-z]*/.test(apellido))) {
                    $("#alert_mal_apellido_registrar").css("display", "block");
                    $("#id02").css("display", "none");
                    document.getElementById('#apellido').style.backgroundColor = "red";
                } else {
                    //nombre
                    if (!(/^[a-z][a-z]*/.test(nombre))) {
                        $("#alert_mal_nombre_registrar").css("display", "block");
                        $("#id02").css("display", "none");
                    } else {
                        // telefono
                        if (!(/^\d{9}$/.test(telefono))) {
                            $("#alert_mal_numero_registrar").css("display", "block");
                            $("#id02").css("display", "none");
                        } else {
                            //contraseña
                            if (contrasena1 == contrasena) {


                                $.ajax({
                                    data: parametros,
                                    url: 'php/registro.php',
                                    type: 'post',
                                    beforeSend: function () {
                                        $("#resultado").html("Procesando, espere por favor...");
                                    },
                                    success: function (response) {
                                        $("#resultado").html(response);
                                        //nombre esiste o no
                                        if (response == 1) {

//                                            $('#id02').css("display","none");
//                                            $('#usuario').val("");
//                                            $('#nombre').val("");
//                                            $('#apellido').val("");
//                                            $('#contrasena').val("");
//                                            $('#contrasena1').val("");
//                                            $('#correo').val("");
//                                            $('#sexo').val("");
//                                            $('#telefono').val();
                                            document.getElementById('id02').style.display = "none";
                                            document.getElementById('usuario').value = "";
                                            document.getElementById('nombre').value = "";
                                            document.getElementById('apellido').value = "";
                                            document.getElementById('contrasena').value = "";
                                            document.getElementById('contrasena1').value = "";
                                            document.getElementById('correo').value = "";
                                            document.getElementsByName('sexo').value = "";
                                            document.getElementById('coche').checked = false;
                                            document.getElementById('telefono').value = "";
                                        } else {
                                            $("#alert_mal_usuario_repetido").css("display", "block");
                                            $("#id02").css("display", "none");
                                        }
                                    }
                                });
                            } else {
                                $("#alert_mal_pass_iguales_registrar").css("display", "block");
                                $("#id02").css("display", "none");
                            }
                        }
                    }
                }
            }
//    }
        }

    });

    $(".ocultarRegistro").click(function () {
        document.getElementById('id02').style.display = 'none';
        document.getElementById('usuario').value = "";
        document.getElementById('nombre').value = "";
        document.getElementById('apellido').value = "";
        document.getElementById('contrasena').value = "";
        document.getElementById('contrasena1').value = "";
        document.getElementById('correo').value = "";
        document.getElementById('coche').checked = false;
        document.getElementById('telefono').value = "";
    });

    $(".ocultarLogin").click(function () {
        document.getElementById('idlogin').style.display = 'none';
        document.getElementById('logeado_error').style.display = 'none';
        document.getElementById('loginUsuario').value = null;
        document.getElementById('loginContrasena').value = null;
    });

    $("#abrirLogin").click(function () {
        document.getElementById('idlogin').style.display = 'block';
    });

    $("#abrirRegistrar").click(function () {
        document.getElementById('id02').style.display = 'block';
    });

//----------------------------LOGEAR USUARIOS----------------
    $("#logear_usu").click(function () {
        usuario = $('#loginUsuario').val();
        contrasena = $('#loginContrasena').val()
        if (usuario == "" || contrasena == "") {
            $("#alert_mal_vacio_login").css("display", "block");
            $("#idlogin").css("display", "none");
        } else {
            var parametros = {
                "loginUsuario": usuario,
                "loginContrasena": contrasena
            };
            $.ajax({
                data: parametros,
                url: '../php/login.php',
                type: 'post',
                beforeSend: function () {
                    $("#resultado").html("Procesando, espere por favor...");
                },
                success: function (response) {

                    if (response.trim() == "bien") {
                        document.getElementById('idlogin').style.display = 'none';
                        document.getElementById('loginUsuario').value = "";
                        document.getElementById('loginContrasena').value = "";
                        document.getElementById('logeado_error').style.display = 'none';
                        window.location.href = "../index.html";
                        $("#nav_no_logeado").css("display", "none");
                        $("#nav_logeado").css("display", "inline");
                    } else {
                        document.getElementById('logeado_error').style.display = 'inline';
                        document.getElementById('loginUsuario').value = "";
                        document.getElementById('loginContrasena').value = "";
                        $("#nav_no_logeado").css("display", "inline");
                        $("#nav_logeado").css("display", "none");
                    }
                }
            });
        }
    });

    $("#logear_usu_index").click(function () {
        usuario = $('#loginUsuario').val();
        contrasena = $('#loginContrasena').val()
        if (usuario == "" || contrasena == "") {
            $("#alert_mal_vacio_login").css("display", "block");
            $("#idlogin").css("display", "none");
        } else {
            var parametros = {
                "loginUsuario": usuario,
                "loginContrasena": contrasena
            };
            $.ajax({
                data: parametros,
                url: 'php/login.php',
                type: 'post',
                beforeSend: function () {
                    $("#resultado").html("Procesando, espere por favor...");
                },
                success: function (response) {

                    if (response.trim() == "bien") {
                        document.getElementById('idlogin').style.display = 'none';
                        document.getElementById('loginUsuario').value = "";
                        document.getElementById('loginContrasena').value = "";
                        document.getElementById('logeado_error').style.display = 'none';
                        window.location.href = "index.html";
                        $("#nav_no_logeado").css("display", "none");
                        $("#nav_logeado").css("display", "inline");
                    } else {
                        document.getElementById('logeado_error').style.display = 'inline';
                        document.getElementById('loginUsuario').value = "";
                        document.getElementById('loginContrasena').value = "";
                        $("#nav_no_logeado").css("display", "inline");
                        $("#nav_logeado").css("display", "none");
                    }
                }
            });
        }
    });
//-------------------SALIR DEL USUARIO---------------
    $(".salirUsuario").click(function () {
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
    });

    $(".salirUsuarioIndex").click(function () {
        $.ajax({
            url: 'php/log_out.php',
            type: 'post',
            beforeSend: function () {
                $("#resultado").html("Procesando, espere por favor...");
            },
            success: function (response) {
                if (response.trim() == "salir") {
                    $("#nav_no_logeado").css("display", "inline");
                    $("#nav_logeado").css("display", "none");


                } else {
                    alert("mal");
                }
            }
        });
    });



//    $("#boton_registrar").click(function () {
//
//        usuario = $('#usuario').val();
//        nombre = $('#nombre').val();
//        apellido = $('#apellido').val();
//        contrasena = $('#contrasena').val();
//        contrasena1 = $('#contrasena1').val();
//        correo = $('#correo').val();
//        sexo = $('#sexo').val();
//        telefono = $('#telefono').val();
////    if (parametros_requeridos_nok(usuario, nombre, apellido, contrasena, contrasena1, correo, sexo, telefono)) {
////        alert("mal");
////    } else {
//        if (usuario == "" || nombre == "" || apellido == "" || contrasena == "" || contrasena1 == "" || correo == "" || sexo == "" || telefono == "") {
//            alert("Los campos no pueden estar vacios");
//        } else {
//            var parametros = {
//                "usuario": usuario,
//                "nombre": nombre,
//                "apellido": apellido,
//                "contrasena": contrasena,
//                "contrasena1": contrasena1,
//                "correo": correo,
//                "sexo": sexo,
//                "telefono": telefono
//
//
//            };
//            //email
//            
//        }
//
//
//    });

});

