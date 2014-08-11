'use strict';

/**
 * @ngdoc function
 * @name liveMongoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the liveMongoApp
 */
angular.module('liveMongoApp')
  .controller('MainCtrl', function($scope, $http) {

    $http.get('http://localhost:1337/books').
    success(function(resp) {
      $scope.books = angular.fromJson(resp);
    }).
    error(function(err) {
      console.error(err);
    });
    $scope.gridOptions = {
      data: 'books',
      enableCellSelection: true,
      enableRowSelection: false,
      enableCellEditOnFocus: true,
    };
  });
