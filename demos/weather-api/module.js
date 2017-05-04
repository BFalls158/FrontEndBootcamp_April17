var app = angular.module('weatherModule', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/location', {
      controller: 'locationController',
      templateUrl: 'location.html'
    })
    .when('/result', {
      controller: 'resultController',
      templateUrl: 'result.html'
    })
    .otherwise({
      redirectTo: '/location'
    });
});
