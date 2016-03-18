/*global angular*/
(function () {

    var controller = function ($scope, $rootScope, $routeParams) {
        //code
        $rootScope.setIndexQuickMenuActive(4);

        $scope.header = {
            title:"Ayuda",
            footer: $scope.footer
        };


    };
    controller.$inject = ['$scope', '$rootScope', '$routeParams'];
    angular.module('Help').controller('HelpController', controller);

})();