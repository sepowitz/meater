
//Meat Controller//

app.controller('MeatController', ['$location', 'Calculator', function( $location, Calculator){
	var controller = this;

	this.makeRequest = function(){
		Calculator.meat = controller.meat;
		$location.path('/getcookin')
	};
}]);

app.controller('ResultsController', ['$http', 'Calculator', function( $http, Calculator){
	controller = this;

	this.meat = Calculator.meat;
}]);
