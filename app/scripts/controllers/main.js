'use strict';

/**
 * @ngdoc function
 * @name bstkAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bstkAppApp
 */
angular.module('bstkApp')
  .controller('MainCtrl', ['$scope','pessoasAPI', 'pessoas','msg', function ($scope, pessoasAPI, pessoas, msg) {
   	
   	function init(){
   		$scope.pessoas = pessoas.data;
   	}

   	$scope.delete = function(pessoa){
   		msg.confirm("Deseja realmente remover essa pessoa?", function (ev) {
	   		pessoasAPI.remove(pessoa).then(function(result){
	   			$scope.pessoas = $scope.pessoas.filter(function(_pessoa){
	   				return _pessoa.id != pessoa.id;
	   			})
	   		})
	   		.catch(function(error){
	   			console.log(error);
	   		});	
	   	});
   	}

   	init();
  }]);
