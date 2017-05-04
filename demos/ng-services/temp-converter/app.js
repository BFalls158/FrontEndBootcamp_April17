(function() { // <-- It's an IIFE
var app = angular.module("tempConverterApp", []); // create the module

// Angular auto-"magically" injects our service called "tempConverterService".
app.controller("tempConverterController", function($scope, tempConverterService) {
    $scope.convertToCelsius = function(sourceTemp) {
        $scope.targetTemperature = tempConverterService.toCelsius(sourceTemp);
        $scope.targetUnit = "C";
    };
    $scope.convertToFahrenheit = function(sourceTemp) {
        $scope.targetTemperature = tempConverterService.toFahrenheit(sourceTemp);
        $scope.targetUnit = "F";
    };
});

})();
