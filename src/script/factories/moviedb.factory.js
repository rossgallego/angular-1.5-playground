module.exports  = function($http){
return function () {
		var url = 'http://api.themoviedb.org/3/',
        mode = "search/movie?",
        key = 'api_key=ac00c5a8511db9c3ed8740249dd6259c&query=',
        input = "batman";
        var movieInfo = url + mode + key + input;
        return $http.get(movieInfo); 
    };
}





// module.exports =  function($http, $q){
//     return function () {

// 		var url = 'http://api.themoviedb.org/3/',
//         mode = "search/movie?",
//         key = 'api_key=ac00c5a8511db9c3ed8740249dd6259c&query=',
//         input = "batman";
//         // input = query;
//         var movieInfo = url + mode + key + input;

//         var d = $q.defer();
//         $http.get(movieInfo)
//             .then(function(data) {
//                 d.resolve(data);
//             })
//             .catch(function(data){
//                 console.log('error: ' + data);
//                 d.reject(data);
//             });
//         return d.promise;
//     };
// }