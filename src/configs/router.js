'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('app', {
        abstract: true,
        controller: 'AppCtrl',
        templateUrl: 'app/app.html'
      })
      .state('app.main', {
        url: '/',
        controller: 'MainCtrl',
        controllerAs: 'main',
        templateUrl: 'app/main/main.html'
      })

    $urlRouterProvider.otherwise('/');

  });
