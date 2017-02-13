/***--------------cambiar imagenes del index logeado---------------*********///////


var imgbusturialdea = new Array(
        '..images/zonas/busturialdea/busturialdea1.jpg',
        '../images/zonas/busturialdea/busturialdea2.jpg',
        '../images/zonas/busturialdea/busturialdea3.jpg'

        );
var imguribe = new Array(
        '../images/zonas/uribe/uribe1.png',
        '../images/zonas/uribe/uribe2.jpg',
        '../images/zonas/uribe/uribe3.jpg'

        );
var imgbilbao = new Array(
        '../images/zonas/bilbao/bilbao1.jpg',
        '../images/zonas/bilbao/bilbao2.jpg',
        '../images/zonas/bilbao/bilbao3.jpg'

        );

var imgdurangoaldea = new Array(
        '../images/zonas/durangesado/durango1.jpg',
        '../images/zonas/durangesado/durango2.jpg',
        '../images/zonas/durangesado/durango3.jpg'

        );
var imgleaartibai = new Array(
        '../images/zonas/leartibai/leartibai1.jpg',
        '../images/zonas/leartibai/leartibai2.jpg',
        '../images/zonas/leartibai/leartibai3.jpg'

        );
var imgarratia = new Array(
        '../images/zonas/arratia-nerbioi/arratia1.jpg',
        '../images/zonas/arratia-nerbioi/arratia2.jpg',
        '../images/zonas/arratia-nerbioi/arratia3.jpg'

        );


/**
 * Funcion para cambiar la imagen
 */
function rotarImagenes() {
    // obtenemos un numero aleatorio entre 0 y la cantidad de imagenes que hay
    var index = Math.floor((Math.random() * imgbusturialdea.length));
    // cambiamos la imagen
    document.getElementById("busturialdea").src = imgbusturialdea[index];

    var index1 = Math.floor((Math.random() * imguribe.length));
    document.getElementById("uribe").src = imguribe[index1];

    var index2 = Math.floor((Math.random() * imgbilbao.length));
    document.getElementById("bilbao").src = imgbilbao[index2];

    var index3 = Math.floor((Math.random() * imgdurangoaldea.length));
    // cambiamos la imagen
    document.getElementById("dueangoaldea").src = imgdurangoaldea[index3];

    var index4 = Math.floor((Math.random() * imgleaartibai.length));
    document.getElementById("leaartibai").src = imgleaartibai[index4];

    var index5 = Math.floor((Math.random() * imgarratia.length));
    document.getElementById("arratia").src = imgarratia[index5];

}

setInterval(rotarImagenes, 8000);