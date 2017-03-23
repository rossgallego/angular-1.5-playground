require('angular');
// require('angular-route');
require('angular-ui-router');
require('bootstrap-loader');
require('../style/base.scss');

// controllers
import home  from "./controllers/home.controllers.js";
import movies  from "./parts/movies/movies.controller.js";
import box02controller  from "./parts/box02/box02.controller.js";
import milkListcontroller  from "./parts/milkList02/milkList.controller.js";
import formListController  from "./parts/formList/formList.controller.js";

// directives
import services from "./directives/services.directive.js";
import box02directive from "./parts/box02/box02.directive.js";
import milkListdirective from "./parts/milkList02/milkList.directive.js";
import formList from "./parts/formList/formList.directive.js";

// services
import UserService  from "./services/services.service.js";
import MovieService  from "./services/moviedb.service.js";
import MovieServiceImage  from "./services/moviedbImage.service.js";

// factories
import Moviedbfactory  from "./factories/moviedb.factory.js";

// START
// var app = angular.module('appset', ["ngRoute","ui.router"]);
var app = angular.module('appset', ["ui.router"]);

// controllers
app.controller("home", home);
app.controller("movies", movies);
app.controller("box02controller", box02controller);
app.controller("milkListcontroller", milkListcontroller);
app.controller("formListController", formListController);

// directives
app.directive("services", services);
app.directive("box02directive", box02directive);
app.directive("milkListdirective", milkListdirective);
app.directive("formList", formList);

// services
app.service("UserService", UserService);
app.service("MovieService", MovieService);
app.service("MovieServiceImage", MovieServiceImage);

// factories
app.factory("Moviedbfactory",Moviedbfactory);

// CONFIG
app.config(function($stateProvider, $urlRouterProvider,$locationProvider) {

  $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});
  $urlRouterProvider.otherwise("/");
  
  var helloState = {
    name: 'hello',
    url: '/',
    template: require('./views/london.html')
  }
  
  var aboutState = {
    name: 'state1',
    url: '/state1',
    // template: '<h3>Its the UI-Router hello world app!1</h3>'
    template: require('./views/london.html')
  }
  var aboutState2 = {
    name: 'state2',
    url: '/state2',
    template: require('./views/movie02.html')
    // controller : "movieCtrl"
  }
  var aboutState3 = {
    name: 'state3',
    url: '/state3',
    template: require('./views/parts01.html')
  }
   var aboutState4 = {
    name: 'state4',
    url: '/state4',
    template: '<h3>Its the UI-Router hello world app!4</h3>'
  } 

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
  $stateProvider.state(aboutState2);
  $stateProvider.state(aboutState3);
  $stateProvider.state(aboutState4);
});


app.controller("jaxCtrl", function ($scope,UserService) {
    $scope.message = "I love London";
    UserService.getUserData().then(function(data) {
         // $scope.gradovi = data.data;
         $scope.gradovi = data.data;
    }).catch(function(errorResponse) {
         console.log('oopsie', errorResponse);
    });
});


app.controller("parisCtrl", function ($scope,UserService) {
    $scope.message = "I love Paris";
    UserService.getUserData().then(function(data) {
         // $scope.gradovi = data.data;
         $scope.gradovi = data.data;
    }).catch(function(errorResponse) {
         console.log('oopsie', errorResponse);
    });
});


// arrays 
var array01 = ["saab", "volvo", "bMW"];
var array02 = ["ford", "chevy", "mustang"];
var array03 = [40, 100, 1, 5, 25, 10];

// add new item as the LAST, shows new array length
array01.push("toyota");
// delete LAST item, also shows was was deleted
var pop01 = array01.pop();
// like pop but delete FIRST, also shows was was deleted
var shift01 = array01.shift();
// add new item to FIRST, shows new array length
var unshift01 = array01.unshift("Nissan");
// change elements inside
var change01 = array01[0] ="ferrari";
// delete elemebts
// var delete01 = delete array0[1]; //DO NOT USE 
// add via splice method
var splice01 = array01.splice(2,0,"honda","acura","lexus")
// convert array to string,
var string01 = array01.toString()
// convert array to string, but with seperator
var join01 = array01.join(" // ")
// access, ja is numbered array
var access01 = array01[3]
// join arrays, unlimited 
var concat01 = array01.concat(array02);
//length of concatination,
var length02 = concat01.length;
//sort ascending and descending order
var concat01c = concat01.sort();
var concat01z = concat01.reverse();
// convert to string
var string02 = concat01.toString();
//length property
var lenght01 = array01.length;

// sort numeric, cant use dfault so a custom function used
var array3sort = array03.sort(function(a, b){return a - b});
// sort numeric, highest number
var array3high = array03.sort(function(a, b){return b - a});


////////////////////
var screen0 = "<b>current array is</b> " + string01;
// $(".array0").html(screen0)
// var screen00 = "<b>current array is</b> " + string02;
var screen00 = "<b>current array is </b> " + concat01z;
// $(".array0").html(screen00)
var screen000 = "<b>current array is </b> " + array3high;
$(".array0").html(screen000)

// var screen1 = "<b>length is:</b> " + lenght01;
// var screen1 = "<b>access 3rd</b> " + access01;
// var screen1 = "<b>convert array to string, but with seperator</b> " + join01;
// var screen1 = "delete LAST item " + pop01;
// var screen1 = "like pop but delete FIRST " + shift01;
// var screen1 = "like push but add FIRST " + unshift01;
// var screen1 = " delete elements " + delete01;
var screen1 = " length of concatination " + length02;
$(".array1").html(screen1)


// sort issue with capitalized // .toLowerCase();



