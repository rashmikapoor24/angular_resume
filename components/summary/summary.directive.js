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

	Controller.$inject = ['$scope', '$timeout', 'resumeService'];
	
	function Controller($scope, $timeout, resumeService){
		var vm = this;
		
		loadData();
		
		function loadData(){
			resumeService.getSummary().then(function(summary){
				vm.summary = summary;
				console.log(vm.summary);
                $timeout(function(){ vm.showProfilePic = true; }, 300, true);
                $timeout(function(){ vm.showName = true; }, 600, true);
                $timeout(function(){ vm.showTitle = true; }, 700, true);
                $timeout(function(){ vm.showCurrentEmployer = true; }, 800, true);
                
			});
		}
        
	}
})();
	