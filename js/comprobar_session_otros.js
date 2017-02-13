$("*").load(function(){
$.ajax({
        url: '../php/comprobar_session.php',
        type: 'post',
        beforeSend: function () {
//            $("#resultado").html("Procesando, espere por favor...");
        },
        success: function (response) {
            if (response.length > 0) {
                 $("#nav_no_logeado").css("display","inline");
                $("#nav_logeado").css("display","none");
            } else{
                /////////////ESTA LOGEADO////////
                $("#nav_no_logeado").css("display","none");
                $("#nav_logeado").css("display","inline");
            }
        }
    });
});