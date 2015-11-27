app.controller('explorationAllController',['$scope', '$state', '$http', '$window', '$rootScope', '$timeout', function($scope, $state, $http, $window, $rootScope, $timeout) {
	$scope.trips = [[]];
	$scope.itemsPerRow = 4;
	$scope.tripsData = [];


	$http.get("/data/trips.json").success(function (resp) {
		$scope.tripsData = angular.fromJson(resp).trips;
		parseTrips();
	});

	$scope.tripSelected = function(i,j) {
		//Should get a better method of doing this. Can't broadcast as
		//the destination controller isn't up and running yet
		$rootScope.currentTrip = $scope.trips[i][j];
		$state.go("exploration.detail");
	};

	function adjustRows() {
		var w = $window.innerWidth;

		if ($scope.tripsData.length > 0) {
			if (w < 1550 && w > 1140) {
				if ($scope.itemsPerRow != 3) {
					$scope.itemsPerRow = 3;
					parseTrips();
					$scope.$apply();
				}
			} else if (w < 1140) {
				if ($scope.itemsPerRow != 2) {
					$scope.itemsPerRow = 2;
					parseTrips();
					$scope.$apply();
				}	
			} else if (w > 1550) {
				if ($scope.itemsPerRow != 4) {
					$scope.itemsPerRow = 4;
					parseTrips();
					$scope.$apply();
				}
			}
		}
	}

	function parseTrips() {
		$scope.trips = [[]];
		var group = 0;

		for (var i = 0; i < $scope.tripsData.length; i++) {
			if ($scope.trips[group].length == $scope.itemsPerRow) {
				$scope.trips.push([]);
				group++;
			}

			$scope.trips[group].push($scope.tripsData[i]);
		};
	}

	angular.element($window).bind('resize', function () {
		adjustRows();
	});

	$timeout(adjustRows, 100);
}]);