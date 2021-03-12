// Create module

const app = angular.module('moduleName', []);

// Create the controller
function myController($scope) {
  $scope.yourProperty = 'This is from controller asdfsdfsf';
  $scope.array = ['vla', 'sdf', 'ghf', 'rgerg', 'dsfsdf'];
}

// Register controller with module
app.controller('myController', myController);
