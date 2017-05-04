var app = angular.module('weatherModule');

app.controller('resultController', function($scope, weatherService) {
  $scope.searchResults = weatherService.returnResults();
  console.log($scope.searchResults);
});
