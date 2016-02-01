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
		}
	}

	Controller.$inject = ['$scope', '$http'];
	
	function Controller($scope, $http){
		var vm = this;
		
		loadData();
		
		function loadData(){
			 $http.get('data/rashmi.json').then(function(resp){
				 if(!resp) return {};
				 vm.topSkills = resp.data.topSkills;
			 })
		}
	}
})();
	