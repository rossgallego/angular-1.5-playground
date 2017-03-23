var milkList = require('./milkList.html');

module.exports = function() {
	return {
		template: milkList,
		link: function(scope, element) {	

		},
		// controller: "milkListcontroller",
		controllerAs: "crawler",
	    scope: {
	      // powerInfo: '=info',
	      logan: '@',
	      action: '&',
	      banner: "="
	    },
	    scope: {},
	    controller: function(){
	    	this.banner = {
	    		alias: "Incredible Hulk",
	    		power: "green giant"
	    	}
	    }
	}
};