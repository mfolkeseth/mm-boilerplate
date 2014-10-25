'use strict';

angular.module('mmApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'HomeController'
    });
}])

.controller('HomeController', [function() {

}]);
