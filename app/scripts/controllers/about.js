'use strict';

/**
 * @ngdoc function
 * @name jenksFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jenksFrontendApp
 */
angular.module('jenksFrontendApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
