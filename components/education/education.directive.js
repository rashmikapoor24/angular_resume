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
		}
	}

	Controller.$inject = ['$scope', '$http'];
	
	function Controller($scope, $http){
		var vm = this;
		loadData();
		
		function loadData(){
			 $http.get('data/rashmi.json').then(function(resp){
				 if(!resp) return {};
				 vm.education = resp.data.education;
			 })
		}
	}
})();
	