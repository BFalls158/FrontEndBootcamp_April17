var app = angular.module('weatherModule');

app.factory('weatherService', function($http) {

  var finalData = {};

  return {
    searchWeather: function(searchCriteria) {
      var promise = $http({
        method: 'GET',
        url: 'http://api.wunderground.com/api/6223b2f5321ee9e1/conditions/q/' + searchCriteria.state + '/' + searchCriteria.city + '.json'
      }).then(function successfulCallback(response) {
        console.log(response);
        var weatherData = response;
        finalData.temp = weatherData.data.current_observation.temp_f;
        finalData.weather = weatherData.data.current_observation.weather;
        finalData.windspeed = weatherData.data.current_observation.wind_mph;
        finalData.feel = weatherData.data.current_observation.feelslike_f;
      }, function errorCallback(error) {
        console.log(error);
      });

      return promise;
    },
    returnResults: function() {
      return finalData;
    }
  }

});
