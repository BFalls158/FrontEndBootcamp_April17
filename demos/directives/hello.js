var app = angular.module('exampleMod');

app.directive('helloWorld', function() {

  return {
    restrict: 'AE',
    template: '<h2>Hello World</h2>',
    replace: true
  }

});
