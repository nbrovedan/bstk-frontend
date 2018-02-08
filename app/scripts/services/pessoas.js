'use strict';

/**
 * @ngdoc service
 * @name bstkApp.pessoas
 * @description
 * # pessoas
 * Factory in the bstkApp.
 */
angular.module('bstkApp')
  .factory('pessoasAPI', ['$http', 'config', 
                 function ($http,   config) {
    
    var _getAll = function(){
      return $http.get(config.urlServer + '/pessoas');
    }

    var _add = function(pessoa){
      return $http.post(config.urlServer + '/pessoa/add', pessoa);
    }

    var _remove = function(pessoa){
      return $http.delete(config.urlServer + '/pessoa/' + pessoa.id);
    }

    var _getById = function(id){
      return $http.get(config.urlServer + '/pessoa/' + id);
    }
    // Public API here
    return {
      getAll: _getAll,
      add : _add,
      remove: _remove,
      getById: _getById
    };
  }]);
