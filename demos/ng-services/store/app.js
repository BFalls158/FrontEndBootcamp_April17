(function() { // <-- It's an IIFE
var app = angular.module("wordApp", []); // create the module

// Angular auto-"magically" injects our service called "tempConverterService".
app.controller("formController", function($scope, wordStore) {
    $scope.saveWord = function(word) {
        wordStore.setWord(word);
    };
});

app.controller("alertController", function($scope, wordStore) {
    $scope.showWord = function() {
        alert(wordStore.getWord());
    }
});

})();
