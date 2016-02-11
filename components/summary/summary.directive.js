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

	Controller.$inject = ['$scope', 'resumeService'];
	
	function Controller($scope, resumeService){
		var vm = this;
		
		loadData();
		
		function loadData(){
			resumeService.getSummary().then(function(summary){
				vm.summary = summary;
				console.log(vm.summary);
			});
		}
	}
})();
	