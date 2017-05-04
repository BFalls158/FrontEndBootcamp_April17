(function() { // <-- IIFE
// Because we don't pass the second ([]) parameter, angular.module gets the
// module we made earlier rather than creating one.
var app = angular.module("tempConverterApp");

// Define a service named 'tempConverterService'. This service has two methods,
// toCelsius() and toFahrenheit().
// Here we use service() to make the service.
app.service("tempConverterService", function() {

    function toCelsius(fahrenheitTemp) {
        return (fahrenheitTemp - 32) * 5 / 9;
    }

    function toFahrenheit(celciusTemp) {
        return (celciusTemp * 9 / 5) + 32;
    }
    
    // When using service, set each method on `this`.
    this.toCelsius = toCelsius;
    this.toFahrenheit = toFahrenheit;
});

})();
