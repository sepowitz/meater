
//Meat Controller//

app.controller('MeatController', ['$location', 'Calculator', function( $location, Calculator){
	var controller = this;

	this.makeRequest = function(){
		Calculator.cookTemp = Calculator.getTemp(controller);
		Calculator.meatWeight = Calculator.getWeight(controller);
		Calculator.cookTime = Calculator.getCookTime(controller);
		$location.path('/getcookin');
	};
}]);

app.controller('ResultsController', ['$http', 'Calculator', function( $http, Calculator){
	controller = this;

	this.cookTemp = Calculator.cookTemp;
	this.meatWeight = Calculator.meatWeight / 16;
	this.cookTimeHour = Math.floor(Calculator.cookTime/60);
	this.cookTimeMinute = Calculator.cookTime > 60 ? Calculator.cookTime % 60 : Calculator.cookTime;
}]);
