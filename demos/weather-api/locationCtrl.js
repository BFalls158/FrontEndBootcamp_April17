var app = angular.module('weatherModule');

app.controller('locationController', function($scope, $location, weatherService) {

  $scope.findWeather = function(userState, userCity) {
    var searchCriteria = {
      state: userState,
      city: userCity
    };

    weatherService.searchWeather(searchCriteria).then(function() {
      $location.path('/result');
    });

  };

});
