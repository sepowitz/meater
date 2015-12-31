
//Meat Controller//

app.controller('MeatController', ['$location', 'Calculator', function( $location, Calculator){
	var controller = this;

	this.makeRequest = function(){

		// //User input
		Calculator.meat = Calculator.meatType(controller);
		Calculator.preference = Calculator.cookPref(controller);
		Calculator.guests = Calculator.guestNum(controller);

		//Calculated output
		Calculator.cookTemp = Calculator.getTemp(controller);
		Calculator.meatWeight = Calculator.getWeight(controller);
		Calculator.cookTime = Calculator.getCookTime(controller);
		$location.path('/getcookin');
	};
}]);

app.controller('ResultsController', ['$http', '$interval', 'Calculator', function( $http, $interval, Calculator){
	controller = this;

	this.meat = Calculator.meat;
	this.preference = Calculator.preference;
	this.guests = Calculator.guests;

	this.cookTemp = Calculator.cookTemp;
	this.meatWeight = Calculator.meatWeight / 16;
	this.cookTimeHour = Math.floor(Calculator.cookTime/60);
	this.cookTimeMinute = Calculator.cookTime > 60 ? Calculator.cookTime % 60 : Calculator.cookTime;

	this.countdown = function(){
		countdown = $interval(function(){
			console.log(controller.cookTimeMinute)
			controller.cookTimeMinute -= 1;
		}, 1000);
	};

	this.endCountdown = function(){
		$interval.cancel(countdown);
	};

}]);
