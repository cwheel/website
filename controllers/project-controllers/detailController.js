app.controller('projectDetailController',['$scope', '$state', '$rootScope', '$window', function($scope, $state, $rootScope, $window) {
	if ($rootScope.currentProject == undefined) {
		$state.go("projects.all");
	} else {
		$scope.title = $rootScope.currentProject.title;
		$scope.tagline = $rootScope.currentProject.tagline;
		$scope.builtWith = $rootScope.currentProject.builtWith;
		$scope.builtFor = $rootScope.currentProject.builtFor;
		$scope.sourceCode = $rootScope.currentProject.sourceCode;
		$scope.description = $rootScope.currentProject.description;
		$scope.screen1 = $rootScope.currentProject.screen1;
		$scope.screen2 = $rootScope.currentProject.screen2;
		$scope.screen3 = $rootScope.currentProject.screen3;
		$scope.accent = $rootScope.currentProject.accent;
		$scope.special = $rootScope.currentProject.special;
	}

	$scope.back = function() {
		$state.go("projects.all");
	}

	$scope.showImage = function(img) {
		$rootScope.$broadcast('showLightbox', img);		
	};

	$scope.$on('showProjectDetails', function(e, args) {
		console.log(args);
	});
}]);