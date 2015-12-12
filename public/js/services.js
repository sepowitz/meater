
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

	this.getWeight = function(controller){
			return (controller.guestNum * 8) / 16;
	};

	this.getCookTime = function(controller){
		if(controller.meat == 'beef' && controller.preference == 'rare'){
			return Math.floor(calc.meatWeight * 25);
		} else if(controller.meat == 'beef' && controller.preference == 'medium'){
			return Math.floor(calc.meatWeight * 30);
		} else if(controller.meat == 'beef' && controller.preference == 'well-done'){
			return Math.floor(calc.meatWeight * 34);
		}
	};

});