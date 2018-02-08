'use strict';

/**
 * @ngdoc overview
 * @name bstkAppApp
 * @description
 * # bstkAppApp
 *
 * Main module of the application.
 */
angular
  .module('bstkApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'ngMask',
    'ngAlertify'
  ])
  .config(['$urlRouterProvider', '$stateProvider', 
  function($urlRouterProvider,    $stateProvider) {

        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                resolve: {
                  pessoas: ['pessoasAPI', function(pessoasAPI){
                    return pessoasAPI.getAll();
                  }]
                }
            })
            .state('new', {
                url: '/form',
                templateUrl: 'views/form.html',
                controller: 'FormCtrl'
            })
            .state('edit', {
                url: '/form/:id',
                templateUrl: 'views/form.html',
                controller: 'FormCtrl'
            });

        $urlRouterProvider.otherwise('/main');
  }]);
