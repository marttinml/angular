(function(){
	var service = function($appService){
		var method = 'tiempoaire';
		this.carrier;
		this.amount;
		this.number;
		
		this.data = {
			carrier : this.carrier,
			amount  : this.amount,
			number 	: this.number
		};

		this.isValid = function(){
			return true;
		};
		this.do = function(){
			isValid() && return $appService.post(method,this.data);
		};
	};
	angular.module('Tiempoaire').service('$tiempoaire',service);
})();