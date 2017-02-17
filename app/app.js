angular.module("todoListApp", [])

.controller('mainCtrl', function($scope) {
  $scope.helloWorld = function() {
    console.log("Hello there! This the helloWorld controller function, in the mainCtrl!");
  };
  
  $scope.todos = [
    {"name": "Clean up bruh"},
    {"name": "Water the dog bruh"},
    {"name": "Feed the lawn bruh"},
    {"name": "Pay dem bills bruh"},
    {"name": "RUN NIGGA"},
    {"name": "SWIM BRUH"}
  ]

});