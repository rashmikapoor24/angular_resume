(function() {
  'use strict';
	angular
	.module('app')
	.directive('experience',experience);
						 
	function experience(){
		return {
			templateUrl: 'components/experience/experience.html',
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
			resumeService.getExperiences().then(function(experiences){
				vm.experiences = experiences;
				console.log(vm.experiences);
			});
		}
	}
})();
	