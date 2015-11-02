app.controller('mainController',['$scope', '$state', '$timeout', '$rootScope', function($scope, $state, $timeout, $rootScope) {
	$scope.shouldResume = false;

	$scope.resumeClick = function() {
		if ($scope.shouldResume) {
			$scope.showNav = false;
		}
	};

	$scope.switchViews = function(route) {
		$timeout(function() {
			$scope.showNav = false;
		}, 100);

		$state.go(route);
	};

	$scope.$watch('showNav', function () {
		if (!$scope.showNav) {
			$rootScope.$broadcast('navigationHidden');
			$scope.shouldResume = false;
		} else {
			$timeout(function() {
				$scope.shouldResume = true;
			}, 500);

			$rootScope.$broadcast('navigationShowning');
		}
	});
}]);