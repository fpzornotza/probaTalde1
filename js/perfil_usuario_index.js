var miApp = angular.module('miApp', []);

miApp.controller('miControlador', function ($scope, $http) {

    $scope.mensaje="hola";
    $http.get("php/perfil_usuario.php")
            .success(function (data){
                $scope.usuarios = data;
               // alert($scope.usuarios);
               
            });
     
            
//            .error(function () {
//
//                $scope.alumnos = "error in fetching data";
//            });
 });
 
