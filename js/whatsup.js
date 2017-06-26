	console.log("starting app...");
	angular.module('whatsup',[]).controller('whatsupcontroller',['$scope','$rootScope', function($scope,$rootScope) {
			$rootScope.tags = ["Sports","Weather","Academic"];
			console.log("angular initialized....");
	}]);
