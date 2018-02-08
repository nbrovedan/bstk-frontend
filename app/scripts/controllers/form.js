'use strict';

/**
 * @ngdoc function
 * @name bstkAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bstkAppApp
 */
angular.module('bstkApp')
  .controller('FormCtrl', ['$scope', '$state', 'config','pessoasAPI','$stateParams','msg', function ($scope, $state, config, pessoasAPI, $stateParams, msg) {
  		function init(){
  			if($stateParams.id){
  				pessoasAPI.getById($stateParams.id).then(function(result){
  					console.log(result);
  					if(result.length == 0){
  						$state.go('new');
  					}else{
  						$scope.pessoa = result.data;
  					}
  				})
  				.catch(function(err){
  					console.log(err);
  				});
  			}
  		}

  		$scope.salvar = function(pessoa){
  			if(!pessoa || !pessoa.nome || !pessoa.telefone || !pessoa.sexo){
  				msg.error("Todos os campos devem ser preeenchidos!");
  			}else{
  				pessoasAPI.add(pessoa).then(function(result){
	  				$state.go('main');
	  			})
	  			.catch(function(err){
	  				console.log(err);
	  			});
  			}
  		}

  		init();

  }]);
