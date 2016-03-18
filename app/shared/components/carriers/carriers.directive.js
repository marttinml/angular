(function(){


	var directive = function($swipe){
		
		var link = function(scope, element, attrs){
			
		};

		return {
			restrict: 'E',
	        templateUrl: 'app/shared/components/carriers/carriers.template.html',
	        link: link,
			scope:{
				options:'=?source'
			}
		};

	};
	


	angular.module('carriers', []).directive('carriers',directive);
})();