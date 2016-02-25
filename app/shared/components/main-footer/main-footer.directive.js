(function(){


	var directive = function($swipe){
		
		var link = function(scope, element, attrs){

		};

		return {
			restrict: 'E',
	        templateUrl: 'app/shared/components/main-footer/main-footer.template.html',
	        link: link,
			scope:{
				options:'=?source'
			}
		};

	};
	


	angular.module('MainFooter', []).directive('mainFooter',directive);
})();