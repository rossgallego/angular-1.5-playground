require('angular');
// require('angular-route');
require('angular-ui-router');
require('angular-animate');
require('bootstrap-loader');
require('../style/base.scss');

// controllers
import home  from "./controllers/home.controllers.js";
import movies  from "./parts/movies/movies.controller.js";
import box02controller  from "./parts/box02/box02.controller.js";
import milkListcontroller  from "./parts/milkList02/milkList.controller.js";
import formListController  from "./parts/formList/formList.controller.js";
import znotesController  from "./parts/znotes/znotes.controller.js";
import angController  from "./parts/ang/ang.controller.js";
import angController2  from "./parts/ang/ang.controller2.js";
// directives
import services from "./directives/services.directive.js";
import box02directive from "./parts/box02/box02.directive.js";
import milkListdirective from "./parts/milkList02/milkList.directive.js";
import formList from "./parts/formList/formList.directive.js";
import znotesDirective from "./parts/znotes/znotes.directive.js";
import znoteDirective from "./parts/znotes/znote.directive.js";
import angDirective from "./parts/ang/ang.directive.js";
// services
import MovieService  from "./services/moviedb.service.js";
import MovieServiceImage  from "./services/moviedbImage.service.js";
import znotesService  from "./services/znotes.service.js";

// factories
import Moviedbfactory  from "./factories/moviedb.factory.js";

// START
// var app = angular.module('appset', ["ngRoute","ui.router"]);
var app = angular.module('appset', ["ui.router","ngAnimate"]);
// var app = angular.module('appset', ["ui.router","angular-animate"]);
// var app = angular.module('appset', ["ui.router"]);

// controllers
app.controller("home", home);
app.controller("movies", movies);
app.controller("box02controller", box02controller);
app.controller("milkListcontroller", milkListcontroller);
app.controller("formListController", formListController);
app.controller("znotesController", znotesController);
app.controller("angController", angController);
app.controller("angController2", angController2);

// directives
app.directive("services", services);
app.directive("box02directive", box02directive);
app.directive("milkListdirective", milkListdirective);
app.directive("formList", formList);
app.directive("znotesDirective", znotesDirective);
app.directive("znoteDirective", znotesDirective);
app.directive("angDirective", angDirective);

// services
app.service("MovieService", MovieService);
app.service("MovieServiceImage", MovieServiceImage);
app.service("znotesService", znotesService);
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
  }
  var aboutState3 = {
    name: 'state3',
    url: '/state3',
    template: require('./views/parts01.html')
  }
   var aboutState4 = {
    name: 'state4',
    url: '/state4',
    template: require('./views/znotes.html')
  } 
   var aboutState5 = {
    name: 'state5',
    url: '/state5',
    template: require('./views/ang.html')
  } 

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
  $stateProvider.state(aboutState2);
  $stateProvider.state(aboutState3);
  $stateProvider.state(aboutState4);
  $stateProvider.state(aboutState5);
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



