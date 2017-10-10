// var angular = require('angular');

// require('angular-route');



var module = angular.module('myApp', [ 'ngRoute' ])

module.config(function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: '/views/resultat.html',
    controller: 'MainController',
    controllerAs:'main'
  });

});