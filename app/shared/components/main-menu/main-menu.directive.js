(function(){


	var directive = function($swipe){
		
		var link = function(scope, element, attrs){

		};

		return {
			restrict: 'E',
	        templateUrl: 'app/shared/components/main-menu/main-menu.template.html',
	        link: link,
			scope:{
				options:'=?source'
			}
		};

	};
	


	angular.module('MainMenu', []).directive('mainMenu',directive);
})();