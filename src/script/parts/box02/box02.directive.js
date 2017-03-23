var box02 = require('./box02.html');

module.exports = function() {
	return {
		template: box02,
	    // scope: {
	    //   powerInfo: '=info'
	    // },
	    scope: {
	      powerInfo: '=info',
	      logan: '@',



	      action: '&'
	    },
		link: function(scope, element) {	

		}
	}
};