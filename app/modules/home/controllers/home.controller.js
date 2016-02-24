/*global angular*/
(function () {

    var controller = function ($scope, $routeParams) {
        //code
        $scope.ctrl = 'Home';
    };
    controller.$inject = ['$scope', '$routeParams'];
    angular.module('Home').controller('HomeController', controller);

})();