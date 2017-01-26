/*global angular*/
(function () {

    var controller = function ($scope, $rootScope, $routeParams, $menu) {
       $menu.user = { 
                name:"Martín UI",
                picture:"",
                url: "#/"
            };
        $menu.options = [ 
            { item:"Home", url:"#/" },
            { item:"HTTP", url:"#/http" },
            { item:"UI", url:"#/ui" }
        ];

        $scope.menu = $menu;
    };
    controller.$inject = ['$scope','$rootScope','$routeParams','$menu'];
    angular.module('home').controller('HomeController', controller);

})();