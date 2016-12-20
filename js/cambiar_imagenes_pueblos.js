



/***--------------cambiar imagenes del index---------------*********///////


var imgbusturialdea = new Array(
        'images/busturialdea1.jpg',
        'images/busturialdea2.jpg',
        'images/busturialdea3.jpg'

        );
var imguribe = new Array(
        'images/uribe1.png',
        'images/uribe2.jpg',
        'images/uribe3.jpg'

        );
var imgbilbao = new Array(
        'images/bilbao1.jpg',
        'images/bilbao2.jpg',
        'images/bilbao3.jpg'

        );

var imgdurangoaldea = new Array(
        'images/durango1.jpg',
        'images/durango2.jpg',
        'images/durango3.jpg'

        );
var imgleaartibai = new Array(
        'images/leartibai1.jpg',
        'images/leartibai2.jpg',
        'images/leartibai3.jpg'

        );
var imgarratia = new Array(
        'images/arratia1.jpg',
        'images/arratia2.jpg',
        'images/arratia3.jpg'

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
