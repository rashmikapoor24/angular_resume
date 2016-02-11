(function() {
  'use strict';
	angular
	.module('app')
	.directive('skills',skills);
						 
	function skills(){
		return {
			templateUrl: 'components/skills/skills.html',
			restrict: 'E',
			controller: Controller,
     	controllerAs: 'vm',
			bindToController: true,
			scope: {}
		};
	}

	Controller.$inject = ['$scope', 'resumeService'];
	
	function Controller($scope, resumeService){
		var vm = this;
		
		loadData();
		
		function loadData(){
			resumeService.getSkills().then(function(skills){
				vm.topSkills = skills;
				console.log(vm.topSkills);
			});
		}
	}
})();
	