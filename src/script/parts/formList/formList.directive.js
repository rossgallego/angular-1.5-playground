var formlist = require('./formList.template.html');

module.exports = function() {
	return {
		template: formlist,
	    scope: {
	    	// attribute: '@alias',
	    	key: "@myalias",
	    	key2: "=pp",
	    	change: "&",
	    },
		controller: "formListController",
		link: function(scope,element,attrs){
			// scope.peter = attrs.alias;
			// $scope.racoon = {alias: "aka racoon2", power: "sharpshooter2"};
			// $scope.steve = {alias: "captain america2", power: "ultra human2"}

			// added isolote scope {}
			// i have my own scope via "scope"
			// added "alias:'@'"
			// now i have acces to outer scope via "$scope", in addition to my own "scope"
			scope.ok3 = "test111";
			scope.newalias = "New alis for mister fantastic"
			
		}
	}
};



