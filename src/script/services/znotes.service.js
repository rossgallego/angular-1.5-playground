module.exports  = function($http) {
	this.znotesData = [
		{
			znoteTitle: "This is a note 11ß",
			znoteContent: "lorem filsum he woon vut thee dem dem fun vu tuk yuf gorgor"
		},
		{
			znoteTitle: "This is a note 2",
			znoteContent: "lorem filsum he woon vut thee dem dem fun vu tuk yuf gorgor"
		},
		{
			znoteTitle: "This is a note 3",
			znoteContent: "lorem filsum he woon vut thee dem dem fun vu tuk yuf gorgor"
		}
	];
	var vm = this;

    this.getZnotes = function() {
		return vm.znotesData;
    }
    this.addZnotes = function(title,content) {
    	vm.znotesData.push({znoteTitle: title,znoteContent: content});
		return vm.znotesData;
    }
    this.deleteZnotes = function(id) {
    	vm.znotesData.splice(id,1)
		return vm.znotesData;
    }
    this.updateZnotes = function(id){
    	// vm.selected = id;
    	return vm.znotesData;	
    }

}