(function() {
  'use strict';
	angular
		.module('app')
		.controller('mainController',function($scope, $rootScope, $location){
			$scope.helloText = 'Hello Rashmi prashant...good job';
		  var theme = $location.search().theme || '';
		  var themeArr = theme.split('-');
		  $rootScope.theme = {
				color: themeArr[0] || 'light',
				size: themeArr[1] || 'medium'
			}  
		});
})(); 