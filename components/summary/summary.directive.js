(function() {
  'use strict';
	angular
	.module('app')
	.directive('summary',summary);
			
	function summary(){
		return {
			templateUrl: 'components/summary/summary.html',
			restrict: 'E',
			controller: Controller,
      controllerAs: 'vm',
			bindToController: true,
			scope: {}
		}
	}					 

	Controller.$inject = ['$scope', '$http'];
	
	function Controller($scope, $http){
		var vm = this;
		
		loadData();
		
		function loadData(){
			 $http.get('data/rashmi.json').then(function(resp){
				 if(!resp) return {};
				 vm.summary = resp.data.summary;
			 })
		}
	}
})();
	