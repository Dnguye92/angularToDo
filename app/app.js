angular.module("todoListApp", [])

.controller('mainCtrl', function($scope) {
  $scope.helloWorld = function() {
    console.log('Hello There! This is the hello world controller function in the mainCtrl'); 
  }
})

.controller('imASibling', function($scope) {
  $scope.foobar = 1234;
  
  //Do other cool stuff
});