var znotes = require('./znotes.template.html');

module.exports = function() {
	return {
		template: znotes,
	    scope: {
	    	key: "@fff",
	    	key2: "=fff",
	    	change: "&",
	    },
		controller: "znotesController",
		controllerAs: "zznote",
		// bindToController: true,
		link: function(scope,element,attrs){
			scope.znotetitle = "test";
			scope.znotecontent = "test";
			scope.ok = function(){
				alert("asassa111")
			}
		}
	}
};



