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
        		active:true
        	},
        	{
        		title:"Ayuda",
        		icoClass : "help",
        		url:"#/help"
        	}
        ];

        $scope.header = {
            title:"Perfil",
            footer:$scope.footer
        };


    };
    controller.$inject = ['$scope', '$routeParams'];
    angular.module('Profil').controller('ProfilController', controller);

})();