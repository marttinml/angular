/*global angular*/
(function () {

    var controller = function ($scope, $rootScope, $routeParams, Home, $menu) {
        //code
        $scope.menu = $menu;
        $scope.homeList     = [];
        $scope.testId       = "";
        $scope.name         = "";
        $scope.description  = "";

        $scope.get = function(){
            var home = new Home();
            home.$get({testId:$scope.testId}).then(function(home){
                $scope.homeList = [home];
            },$scope.showAlert);
        };
        $scope.getAll = function(){
            $scope.homeList = Home.getAll(function(){
                console.log($scope.homeList);
            },$scope.showAlert);
        };
        $scope.save = function(){
            var home = new Home();
            home.name = $scope.name;
            home.description = $scope.description;
            console.log(home);
            home.$save().then(function(home){
                console.log(home);
                $scope.getAll();
            },$scope.showAlert);
        };
        $scope.update = function(){
            var home = new Home();
            home.name = $scope.name;
            home.description = $scope.description;
            home.$update({testId:$scope.testId}).then(function(home){
                console.log(home);
                $scope.getAll();
            },$scope.showAlert);
        };
        $scope.delete = function(){
            var home = new Home();
            home.DOMID =15;
            home.$delete({testId:$scope.testId} ).then(function(home){
                console.log(data);
                $scope.homeList = [];
                $scope.homeList.push(home);
            },$scope.showAlert);
        };

        $scope.showAlert = function(e){
            $scope.serverError = e;
            $scope.alertActive = true;
        };
    };
    controller.$inject = ['$scope','$rootScope','$routeParams','Home', '$menu'];
    angular.module('http').controller('HTTPController', controller);

})();