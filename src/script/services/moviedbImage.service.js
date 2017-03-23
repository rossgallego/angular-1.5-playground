module.exports  = function($http) {
    this.getMovieImage = function(d) {
        // return $http.get("src/script/test.json")
		// return $http.get("http://www.omdbapi.com/?s=batman")
		// return $http.get("http://www.omdbapi.com/?s=superman")

		// var url = 'http://api.themoviedb.org/3/',
	 //        mode = "movie/",
	 //        input = "76341",
	 //        key = '?api_key=ac00c5a8511db9c3ed8740249dd6259c';
  //       var fullurl = url + mode + input + key;

  //       return $http.get(fullurl);
  		var config = "https://api.themoviedb.org/3/configuration?",
			 url = 'http://api.themoviedb.org/3/',
	        mode = "search/movie?",
	        key = 'api_key=ac00c5a8511db9c3ed8740249dd6259c&query=',
	        input = "batman";


        // var movieInfo = url + mode + key + input;
        var configImg = "https://api.themoviedb.org/3/configuration?" + key;

        // return $http.get(movieInfo);  

        return $http.get(configImg);  

    }
}

// https://api.themoviedb.org/3/movie/76341?api_key={api_key}

