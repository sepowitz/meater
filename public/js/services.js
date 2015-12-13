
app.service('Calculator', function(){
	var calc = this;


	this.getTemp = function(controller){
		if(controller.meat == 'beef'){
				return 325;
			} else if(controller.meat == 'lamb'){

			} else if(controller.meat == 'pork'){

			} else if(controller.meat == 'chicken'){

			}
	};

	this.getInnerTemp = function(){
		if(controller.meat == 'beef'){
			if(controller.preference == 'rare'){
				return 145;
			}if(controller.preference == 'medium'){
				return 160;
			}if(controller.preference == 'well-done'){
				return 170;
			}
		} else if(controller.meat == 'lamb'){
				if(controller.preference == 'rare'){
					//LAMB: Rare temp
				}if(controller.preference == 'medium'){
					//LAMB: Medium temp
				}if(controller.preference == 'well-done'){
					//LAMB: Well done temp
				}
		} else if(controller.meat == 'pork'){
				//PORK: ideal temp
		} else if(controller.meat == 'chicken'){
				//Chicken: ideal temp
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
		if(controller.meat == 'beef' && controller.preference == 'rare'){
			return Math.floor((calc.meatWeight/16) * 25);
		} else if(controller.meat == 'beef' && controller.preference == 'medium'){
			return Math.floor((calc.meatWeight/16) * 30);
		} else if(controller.meat == 'beef' && controller.preference == 'well-done'){
			return Math.floor((calc.meatWeight/16) * 34);
		}
	};

});

