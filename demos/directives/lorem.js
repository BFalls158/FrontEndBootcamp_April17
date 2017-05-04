var app = angular.module('exampleMod');

app.directive('lorem', function() {

  return {
    restrict: 'C',
    templateUrl: 'lorem.html',
    replace: false
  }

});
