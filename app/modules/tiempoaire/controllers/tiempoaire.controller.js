/*global angular*/
(function () {

    var controller = function ($scope, $routeParams) {
        //code
        
        $scope.footer = [
        	{
        		title:"Inicio",
        		icoClass : "home",
        		url:"#/"
        	},
        	{
        		title:"Tiempo aire",
        		icoClass : "phone",
        		active:true
        	},
        	{
        		title:"Mensajes",
        		icoClass : "message",
        		url:"#/inbox",
                count:5
        	},
        	{
        		title:"Perfil",
        		icoClass : "profile",
        		url:"#/profile"
        	},
        	{
        		title:"Ayuda",
        		icoClass : "help",
        		url:"#/help"
        	}
        ];

        $scope.header = {
            title:"Tiempo aire",
            footer:$scope.footer
        };


    };
    controller.$inject = ['$scope', '$routeParams'];
    angular.module('Tiempoaire').controller('TiempoaireController', controller);

})();