	console.log("starting app...");
	angular.module('whatsup',[]).controller('whatsupcontroller',['$scope','$rootScope', function($scope,$rootScope) {
			$rootScope.tags = ["Sports","Weather","Academic", "News"];
			console.log("angular initialized....");
			console.log("whatsup upgraded version 1.1.0");
	}]);
