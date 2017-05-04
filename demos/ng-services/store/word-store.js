(function() { // <-- IIFE
var app = angular.module("wordApp");

app.factory("wordStore", function() {
    var word;

    return {
        setWord: function(value) {
            word = value;
        },
        getWord: function() {
            return word;
        }
    };
});
})();
