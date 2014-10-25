'use strict';

angular.module('mmApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'components/home/home.html',
        controller: 'HomeController'
    });
}])

.controller('HomeController', [function() {

}]);
