'use strict';

/**
 * @ngdoc overview
 * @name liveMongoApp
 * @description
 * # liveMongoApp
 *
 * Main module of the application.
 */
angular
  .module('liveMongoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngGrid'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
