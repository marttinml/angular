/*global angular*/
(function () {

    var controller = function ($scope, $routeParams) {
        //code
        $scope.header = {
        	title:"Home"
        };

        $scope.footer = [
        	{
        		title:"Home",
        		icoClass : "",
        		url:"",
        		active:true
        	},
        	{
        		title:"Recargas",
        		icoClass : "",
        		url:""
        	},
        	{
        		title:"Mensajes",
        		icoClass : "",
        		url:""
        	},
        	{
        		title:"Perfil",
        		icoClass : "",
        		url:""
        	},
        	{
        		title:"Ayuda",
        		icoClass : "",
        		url:""
        	}
        ];



        $scope.ctrl = 'Home';
    };
    controller.$inject = ['$scope', '$routeParams'];
    angular.module('Home').controller('HomeController', controller);

})();