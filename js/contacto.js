$(document).ready(function () {



    $("#enviarFormContacto").click(function () {
        nombre = $('#nombre_form').val();
        email = $('#email_form').val();
        telefono = $('#numero_form').val();
        mensaje = $('#mensaje_form').val();
        
        if (!(/^[a-z][a-z]*/.test(nombre))) {
            alert("el nombre no tiene que tener numeros");
        } else {
            // telefono
            if (!(/^\d{9}$/.test(telefono))) {
                alert("el telefono tiene que ser un numero y de 9 caracteres");
            } else {
                if (!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email))) {
                    alert("Correo mal puesto");
                }
                else{
                    var parametros = {
            "nombre": nombre,
            "email": email,
            "telefono": telefono,
            "mensaje":mensaje

        };
                            $.ajax({
                                    data: parametros,
                                    url: '../php/contactar.php',
                                    type: 'post',
                                    beforeSend: function () {
                                        $("#resultado").html("Procesando, espere por favor...");
                                    },
                                    success: function (response) {
                                        alert(response);
                                        $("#resultado").html(response);
                                        //nombre esiste o no
                                        if (response == 1) {
                                            
                                        } else {
                                        }
                                    }
                                });
                }
            }
        }
    });


});