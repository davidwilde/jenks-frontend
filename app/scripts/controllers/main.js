'use strict';

/**
 * @ngdoc function
 * @name jenksFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jenksFrontendApp
 */
angular.module('jenksFrontendApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
