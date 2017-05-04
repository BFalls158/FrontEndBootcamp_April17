var app = angular.module('redditModule');

app.controller('redditCtrl', function($scope, $http) {

  $scope.posts = [];

  $http({
    method: 'GET',
    url: 'http://www.reddit.com/r/aww.json'
  }).then(function successCallback(response) {
    $scope.posts = response.data.data.children;
  }, function(error) {
    console.log(error);
  });

});

app.directive('redditPost', function() {

  return {
    restrict: 'E',
    replace: false,
    templateUrl: 'redditPost.html'
  }

})
