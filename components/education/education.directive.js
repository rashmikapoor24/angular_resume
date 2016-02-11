(function() {
  'use strict';
	angular
	.module('app')
	.directive('education',education);
	
	function education(){
		return {
			templateUrl: 'components/education/education.html',
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
			resumeService.getEducation().then(function(education){
				vm.education = education;
				console.log(vm.education);
			});
		}
	}
})();
	