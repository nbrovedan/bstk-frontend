'use strict';

/**
 * @ngdoc service
 * @name bstkAppApp.config
 * @description
 * # config
 * Factory in the bstkAppApp.
 */
angular.module('bstkApp')
  .factory('config', function () {
    return {
      urlServer : 'http://localhost:8080/bstk-backend/api'
    };
  });
