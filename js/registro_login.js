function realizaProceso(usuario, nombre, apellido, contrasena, contrasena1, correo, sexo, telefono) {

//    if (parametros_requeridos_nok(usuario, nombre, apellido, contrasena, contrasena1, correo, sexo, telefono)) {
//        alert("mal");
//    } else {
    if (usuario == "" || nombre == "" || apellido == "" || contrasena == "" || contrasena1 == "" || correo == "" || sexo == "" || telefono == "") {
        alert("Los campos no pueden estar vacios");
    } else {
        var parametros = {
            "usuario": usuario,
            "nombre": nombre,
            "apellido": apellido,
            "contrasena": contrasena,
            "contrasena1": contrasena1,
            "correo": correo,
            "sexo": sexo,
            "telefono": telefono

        };
        
        if (!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(correo))) {
                alert("Correo mal puesto");
            } else {
                // apellido
                if (!(/^[a-z][a-z]*/.test(apellido))) {
                    alert("el apellido no tiene que tener numeros");
                    document.getElementById('#apellido').style.backgroundColor = "red";
                } else {
                    //nombre
                    if (!(/^[a-z][a-z]*/.test(nombre))) {
                        alert("el nombre no tiene que tener numeros");
                    } else {
                        // telefono
                        if (!(/^\d{9}$/.test(telefono))) {
                            alert("el telefono tiene que ser un numero y de 9 caracteres");
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
                                        alert(response);
                                        $("#resultado").html(response);
                                        //nombre esiste o no
                                        if (response == 1) {
                                            alert("todo bien")
                                            
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
                                            document.getElementById('telefono').value = "";
                                        } else {
                                            alert("el usuario ya esiste")
                                        }
                                    }
                                });
                            } else {
                                alert(contrasena + "----DIFERENTES-----" + contrasena1);
                            }
                        }
                    }
                }
            }
//    }
    }

}
$(document).ready(function () {
    $(".ocultarRegistro").click(function () {
        document.getElementById('id02').style.display = 'none';
        document.getElementById('usuario').value = "";
        document.getElementById('nombre').value = "";
        document.getElementById('apellido').value = "";
        document.getElementById('contrasena').value = "";
        document.getElementById('contrasena1').value = "";
        document.getElementById('correo').value = "";
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
            alert("Los campos no pueden estar vacios");
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
                        window.location.href = "html/index_login.html";
                    } else {
                        document.getElementById('logeado_error').style.display = 'inline';
                        document.getElementById('loginUsuario').value = "";
                        document.getElementById('loginContrasena').value = "";
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
                    window.location.href = "../index.html?mensaje=sesion finalizada";

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

