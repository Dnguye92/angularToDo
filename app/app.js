angular.module("todoListApp", [])

.controller('mainCtrl', function($scope) {
  $scope.learningNgChange = function() {
    console.log("A change was made!");
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