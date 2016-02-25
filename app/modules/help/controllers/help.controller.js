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
        		url:"#/profile"
        	},
        	{
        		title:"Ayuda",
        		icoClass : "help",
                active:true
        	}
        ];

        $scope.header = {
            title:"Ayuda",
            footer: $scope.footer
        };


    };
    controller.$inject = ['$scope', '$routeParams'];
    angular.module('Help').controller('HelpController', controller);

})();