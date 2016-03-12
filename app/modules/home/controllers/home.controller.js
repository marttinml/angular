/*global angular*/
(function () {

    var controller = function ($scope, $routeParams) {
        //code

        $scope.footer = [
        	{
        		title:"Inicio",
        		icoClass : "home",
        		url:"",
        	},
        	{
        		title:"Tiempo aire",
        		icoClass : "fa-phone",
        		url:"#/tiempoaire"
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
            title:"Inicio",
            footer:$scope.footer
        };


        $scope.ctrl = 'Home';
    };
    controller.$inject = ['$scope', '$routeParams'];
    angular.module('Home').controller('HomeController', controller);

})();