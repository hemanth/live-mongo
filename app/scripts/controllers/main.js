'use strict';

/**
 * @ngdoc function
 * @name liveMongoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the liveMongoApp
 */
var app = angular.module('liveMongoApp');

app.directive('liveMongo',function(){
  return {
    restrict: 'E',
    controller: function($scope,BookService) {
    $scope.books = BookService.getBooks.success(function(data){
      $scope.books = data;
    });

    $scope.gridOptions = {
      data: 'books',
      enableCellSelection: true,
      enableRowSelection: false,
      enableCellEditOnFocus: true,
    };

    $scope.$on('ngGridEventEndCellEdit', function(evt){
      console.log(evt.targetScope.row.entity);
      //TDB save to DB.
    });

  },
   templateUrl: '../views/live-mongo.html',
   controllerAs: 'MongoCtrl'

  }
});

app.factory('BookService',['$http',function($http){
    var getBooks =
        $http.get('http://localhost:1337/books').
      success(function(resp) {
        return angular.fromJson(resp);
      }).
      error(function(err) {
        console.error(err);
      });

    return {
      getBooks : getBooks
    };
}]);

