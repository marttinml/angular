/*global angular*/
(function () {

    var angularModules      = ["ngRoute"];
    var customModules       = ["Home"];
    var componentsModules   = [];

    var modules = angularModules.concat(customModules,componentsModules);
    angular.module('App', modules);

})();