var znote = require('./znote.template.html');

module.exports = function() {
	return {
		template: znote,
	 //    scope: {
	 //    	key: "@fff",
	 //    	change: "&",
	 //    },
		// controller: "znotesController",
		// controllerAs: "zznote",
		// bindToController: true,
		link: function(scope,element,attrs){

		}
	}
};



