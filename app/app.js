angular.module("todoListApp", [])

.controller('mainCtrl', function($scope) {
  $scope.helloWorld = function() {
    console.log('Hello There! This is the hello world controller function in the mainCtrl'); 
  }
})

.controller('coolCtrl', function($scope) {
  $scope.whoAmI = function() {
    console.log('Hello there! This is the coolCtrl function!');
  };
  
  $scope.helloWorld = function() {
    console.log('This is not the mainCtrl!'); 
  }
})

.controller('imASibling', function($scope) {
  $scope.foobar = 1234;
  
  //Do other cool stuff
});