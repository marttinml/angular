/*global angular*/
(function () {

    var angularLib  = ["ngRoute","ngTouch","ngResource"];
    var modules     = ["home","http","ui"];
    var components  = ["ngHeader","ngInput","ngAlert","ngMenu"];
	var services 	= ["bundle"];

    var libs = angularLib.concat(modules,components,services);
    angular.module('app', libs);

})();