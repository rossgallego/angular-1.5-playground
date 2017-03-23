module.exports  = function ($scope,$http,MovieService,MovieServiceImage,Moviedbfactory) {
        // $scope.message = "I love London";
        // $scope.moviePosterUrl = "http://image.tmdb.org/t/p";
        // $scope.url = 'http://api.themoviedb.org/3/';
        // $scope.mode = "search/movie?";
        // $scope.key = 'api_key=ac00c5a8511db9c3ed8740249dd6259c&query=';
        // $scope.moviequery = "wolverine";
        
        // $scope.movieInfo1 = $scope.url + $scope.mode + $scope.key + $scope.moviequery;

        // $http.get($scope.movieInfo1)
        //   .then(function(data) {
        //     $scope.$parent.movieInfoInline = data.data.results;
        // }).catch(function(data) {
        //     console.log('oopsie', errorResponse);
        // });

        var vm = this;

         

        this.getMov = function(){
                MovieService.getMovieData()
                    .then(function(data) {
                    vm.movieInfoInline = data.data.results;
                }).catch(function(errorResponse) {
                    console.log('oopsie', errorResponse);
                });
        }
        this.getMov(); // load initial search

        this.searchMov = function(){
                MovieService.searchMovieData(vm.moviequery)
                    .then(function(data) {
                    vm.movieInfoInline = data.data.results;
                }).catch(function(errorResponse) {
                    console.log('oopsie', errorResponse);
                });
        }

        // MovieService.getMovieData($scope.dat)
        // .then(function(data) {
        //     $scope.movieInfo = data.data;
        // }).catch(function(errorResponse) {
        //      console.log('oopsie', errorResponse);
        // });


        // $scope.searchMoviewww = function (){
        //     $scope.movieInfo1 = $scope.url + $scope.mode + $scope.key + $scope.moviequery;
        //     $http.get($scope.movieInfo1)
        //       .then(function(data) {
        //         $scope.$parent.movieInfoInline = data.data.results;
        //     }).catch(function(data) {
        //         console.log('oopsie', errorResponse);
        //     });
        // }


//dont edit below

       // $scope.movieInfo1 = $scope.url + $scope.mode + $scope.key + $scope.moviequery;
       //  $http.get($scope.movieInfo1)
       //    .then(function(data) {
       //      $scope.$parent.movieInfoInline = data.data.results;
       //  }).catch(function(data) {
       //      console.log('oopsie', errorResponse);
       //  });

        // search
        // $scope.searchMoviewww = function (){
        //     $scope.movieInfo1 = $scope.url + $scope.mode + $scope.key + $scope.moviequery;
        //     $http.get($scope.movieInfo1)
        //       .then(function(data) {
        //         $scope.$parent.movieInfoInline = data.data.results;
        //     }).catch(function(data) {
        //         console.log('oopsie', errorResponse);
        //     });
        // }

    // factory
    // Moviedbfactory().then(function (data) {
    //     $scope.movieFac = data.data;
    // });

    // service
    // MovieService.getMovieData($scope.dat).then(function(data) {
    //         $scope.movieInfo = data.data;
    //     }).catch(function(errorResponse) {
    //          console.log('oopsie', errorResponse);
    //     });

    // service image
    // MovieServiceImage.getMovieImage().then(function(data) {
    //      $scope.movieImage = data.data;
    //      $scope.movieImageUrl= $scope.movieImage.images.base_url +"w300" ;
    // }).catch(function(errorResponse) {
    //      console.log('oopsie', errorResponse);
    // });  
};
