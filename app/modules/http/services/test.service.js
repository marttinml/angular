(function(){
	angular.module('http').factory('$test',function($resource, $singleton){
		return $resource($singleton.path + 'test/:testId');
	});
})();