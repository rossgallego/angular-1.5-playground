var angTemplate = require('./ang.template.html');

module.exports = function() {
	return {
		template: angTemplate,
	    scope: {
	    	// key: "@fff",
	    	keyw: "=fw"
	    	// keyw: "=fw",
	    	// change: "&",
	    },
		controller: "angController",
		controllerAs: "iso",
		bindToController: true,
		link: function(scope,element,attrs){
			// scope.znotetitle = "test";
			// scope.znotecontent = "test";
			// scope.ok = function(){
			// 	alert("asassa111")
			// }
		}
	}
};



