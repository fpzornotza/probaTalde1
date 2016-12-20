$.ajax({
        url: '../php/comprobar_session.php',
        type: 'post',
        beforeSend: function () {
//            $("#resultado").html("Procesando, espere por favor...");
        },
        success: function (response) {
            if (response.length > 0) {
                window.location.href = "../index.html";
            } 
        }
    });