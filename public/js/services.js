
app.service('Calculator', function(){
	var calc = this;



	this.meatType = function (controller){
		return controller.meat;
	};

	this.cookPref = function(controller){
		return controller.preference;
	};

	this.guestNum = function(controller){
		return controller.guestNum;
	};


	//This calculates the appropriate cooking temp
	//based on users meat choice

	this.getTemp = function(controller){
		if(controller.meat == 'beef'){
				return 325;
			} else if(controller.meat == 'lamb'){
				return 325;
			} else if(controller.meat == 'pork'){
				return 350;
			} else if(controller.meat == 'chicken'){
				return 350;
			}
	};

	//This calculates the desired inner temp
	//based on users meat and cooking preference
	this.getInnerTemp = function(){
		if(controller.meat == 'beef'){
			if(controller.preference == 'rare'){
				return 145;
			} if(controller.preference == 'medium'){
				return 160;
			} if(controller.preference == 'well-done'){
				return 170;
			}
		} else if(controller.meat == 'lamb'){
				  if(controller.preference == 'rare'){
					return 130;
				} if(controller.preference == 'medium'){
					return 140;
				} if(controller.preference == 'well-done'){
					return 150;
				}
		} else if(controller.meat == 'pork'){
				return 145;
		} else if(controller.meat == 'chicken'){
				return 165;
		}
	};

	//This gets recommended amount of meat in oz 
	//based on the number of guests
	this.getWeight = function(controller){
			return (controller.guestNum * 8);
	};

	//This calculates the amount of cooking time
	//per pound, taking into consideration the users
	//cooking preference. This converts the weight
	//from oz to pounds prior to calculating the desired cook time
	this.getCookTime = function(controller){
		if(controller.meat === 'beef'){
			if(controller.preference === 'rare'){
				return Math.floor((calc.meatWeight/16) * 25);
			} if(controller.preference === 'medium'){
					return Math.floor((calc.meatWeight/16) * 30);
			} else if(controller.preference === 'well-done'){
						 return Math.floor((calc.meatWeight/16) * 34);
			}
		} else if(controller.meat === 'lamb'){
				if(controller.preference === 'rare'){
					return Math.floor((calc.meatWeight/16) * 15);
				} if(controller.preference === 'medium'){
						return Math.floor((calc.meatWeight/16) * 20);
				} else if(controller.preference === 'well-done'){
								 return Math.floor((calc.meatWeight/16) * 30);
				}
		} else if(controller.meat === 'pork'){
			return Math.floor((calc.meatWeight/16) * 30);
		} else if(controller.meat === 'chicken'){
			return Math.floor((calc.meatWeight/16) * 20);
		}
	};
});

