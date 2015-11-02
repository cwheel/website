app.controller('detailController',['$scope', '$state', '$rootScope', function($scope, $state, $rootScope) {
	$scope.lightboxIsVisible = false;
	$scope.lightboxImage = "";

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
	}

	$scope.back = function() {
		$state.go("projects.all");
	}

	$scope.showImage = function(img) {
		$scope.lightboxImage = img;
		$scope.lightboxIsVisible = true;
	};

	$scope.$on('navigationShowning', function(e, args) {
		$scope.lightboxIsVisible = false;
	});

	$scope.$on('showProjectDetails', function(e, args) {
		console.log(args);
	});
}]);