'use strict';

// Declare app level module which depends on views, and components
angular.module('mmApp', [
    'ngRoute',
    'mmApp.home'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
