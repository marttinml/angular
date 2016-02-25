/*global angular*/
(function () {

    var angularModules      = ["ngRoute","ngTouch"];
    var customModules       = ["Home"];
    var componentsModules   = ["MainHeader","MainFooter"];

    var modules = angularModules.concat(customModules,componentsModules);
    angular.module('App', modules);

})();