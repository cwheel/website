app.controller('mainController',['$scope', '$state', '$timeout', function($scope, $state, $timeout) {
	$scope.shouldResume = false;

	$scope.resumeClick = function() {
		console.log($scope.shouldResume);
		if ($scope.shouldResume) {
			$scope.showNav = false;
		}
	};

	$scope.switchRoutes = function(route) {
		$timeout(function() {
				$scope.showNav = false;
		}, 100);
		
		$state.go(route);
	};

	$scope.$watch('showNav', function () {
		if (!$scope.showNav) {
			$scope.shouldResume = false;
		} else {
			$timeout(function() {
				$scope.shouldResume = true;
			}, 500);
		}
	});
}]);