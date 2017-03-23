module.exports  = function($http) {

    var vm = this;

    this.url = 'http://api.themoviedb.org/3/';
    this.mode = "search/movie?";
    this.key = 'api_key=ac00c5a8511db9c3ed8740249dd6259c&query=';
    this.input = "batman"; //initial search query
    this.movieInfo = this.url + this.mode + this.key + this.input;

    this.getMovieData = function() {
        return $http.get(vm.movieInfo);  
    }
    this.searchMovieData = function(query) {
        vm.input = query;
        vm.movieInfo = vm.url + vm.mode + vm.key + vm.input;
        return $http.get(vm.movieInfo);  
    }

}






// https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher