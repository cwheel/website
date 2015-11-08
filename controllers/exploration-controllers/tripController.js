app.controller('explorationTripController', ['$scope', '$state', '$http', '$window', '$rootScope', '$timeout', function($scope, $state, $http, $window, $rootScope, $timeout) {
	if ($rootScope.currentTrip == undefined) {
		$state.go("exploration.all");
	} else {
		$scope.trip = $rootScope.currentTrip.trip;
		$scope.location = $rootScope.currentTrip.location;
		$scope.description = $rootScope.currentTrip.description;
	}

	$scope.back = function() {
		$state.go("exploration.all");
	}
}]);