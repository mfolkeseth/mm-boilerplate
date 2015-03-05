'use strict';

angular.module('mmApp.home', [])

.controller('HomeController', ['$scope', 'userService', function($scope, userService) {
  // var users = userService.getUsers();
  // users.success(function(data){
  //   $scope.users = data;
  // });
  console.log('sklfjdg');

  $scope.martin = "Martin";
  console.log($scope.martin);
}]);
