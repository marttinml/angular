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
                active:true
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
            title:"Mensajes",
            footer:$scope.footer
        };

    };
    controller.$inject = ['$scope', '$routeParams'];
    angular.module('Inbox').controller('InboxController', controller);

})();