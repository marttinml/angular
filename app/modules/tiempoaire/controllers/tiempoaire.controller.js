/*global angular*/
(function () {

    var controller = function ($scope, $rootScope, $routeParams) {
        //code
        
        $rootScope.setIndexQuickMenuActive(1);
        $scope.carriers = [
            {name:'Iusacell',montos:[{monto:1},{monto:20},{monto:30},{monto:50},{monto:100},{monto:200},{monto:300},{monto:500},{monto:1000}]},
            {name:'Unefon'  ,montos:[{monto:2},{monto:20},{monto:30},{monto:50},{monto:100},{monto:200},{monto:300},{monto:500},{monto:1000}]},
            {name:'Telcel'  ,montos:[{monto:3},{monto:20},{monto:30},{monto:50},{monto:100},{monto:200},{monto:300},{monto:500},{monto:1000}]},
            {name:'Movistar',montos:[{monto:4},{monto:20},{monto:30},{monto:50},{monto:100},{monto:200},{monto:300},{monto:500},{monto:1000}]},
            {name:'Virgin'  ,montos:[{monto:5},{monto:20},{monto:30},{monto:50},{monto:100},{monto:200},{monto:300},{monto:500},{monto:1000}]}
        ];

        //$scope.montos = $scope.carriers[$scope.carrierIndex].montos;

        // $scope.carrierIndex = 3;

        $scope.header = {
            title:"Tiempo aire",
            footer:$scope.footer
        };


    };
    controller.$inject = ['$scope', '$rootScope', '$routeParams'];
    angular.module('Tiempoaire').controller('TiempoaireController', controller);

})();