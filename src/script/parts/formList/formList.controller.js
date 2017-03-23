module.exports  = function ($scope) {
	// this.cyclops = {alias: "eye", power: "laser"};
	$scope.reed = {alias: "Mister Fantastic", power: "stretch"};
	$scope.sue = {alias: "Invisible Woman", power: "invisibility"};
	$scope.johnny = {alias: "Human Torch", power: "flames"};
	$scope.ben = {alias: "thing", power: "strength"};

	$scope.changepower = function(newpower){

		$scope.reed.power = newpower;
	};
	$scope.changealias = function(newalias){

		$scope.reed.alias = newalias;
	}
};