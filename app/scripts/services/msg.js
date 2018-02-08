'use strict';

/**
 * @ngdoc service
 * @name bstkApp.msg
 * @description
 * # msg
 * Factory in the bstkApp.
 */
angular.module('bstkApp')
  .factory('msg', ['alertify', function (alertify) {
    return alertify.logPosition("top right").closeLogOnClick(true).delay(7000).okBtn("Confirmar").cancelBtn("Cancelar");
  }]);