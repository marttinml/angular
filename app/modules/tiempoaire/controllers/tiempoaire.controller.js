/*global angular*/
(function () {

    var controller = function ($scope, $rootScope, $routeParams) {
        //code
        
        $rootScope.setIndexQuickMenuActive(1);

        $scope.carriers = ['Nextel','Iusacell','Unefon','Telcel','Movistar','Virgin'];

        $scope.header = {
            title:"Tiempo aire",
            footer:$scope.footer
        };


    };
    controller.$inject = ['$scope', '$rootScope', '$routeParams'];
    angular.module('Tiempoaire').controller('TiempoaireController', controller);

})();