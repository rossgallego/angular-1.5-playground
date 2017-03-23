module.exports  = function (znotesService, $scope) {
	// this.test ="this works";
	var vm = this;

	// gete data from service
	this.znotes = znotesService.getZnotes();

	// initial values
	this.znotetitle = "qwqqwqqw";
	this.znotecontent = "weew ewweew dsd";

	// add note
	this.addNote = function(title,content){
		znotesService.addZnotes(title,content);
	};

	// delete notes
	this.deleteNote = function(id){
		znotesService.deleteZnotes(id);
	};

	// test
	// this.test4 = this.znotes[0].znoteTitle;
	// this.test5 = this.znotes[0].znoteContent;

	// update notes
	this.updateNote = function(id){
		vm.selected = id;

		$scope.$watch(
			function (){
				vm.test4  = vm.znotes[0].znoteTitle;
				vm.test5 = vm.znotes[0].znoteContent;
				return
			}
		)
	}

	this.updateNoteSave = function(){
		vm.selected = -1;
	};	
};