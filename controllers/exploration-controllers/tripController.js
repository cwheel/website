app.controller('explorationTripController', ['$scope', '$state', '$http', '$window', '$rootScope', '$timeout', function($scope, $state, $http, $window, $rootScope, $timeout) {
	$scope.itemsPerRow = 4;
	$scope.displayImages = [[]];

	if ($rootScope.currentTrip == undefined) {
		$state.go("exploration.all");
	} else {
		$scope.trip = $rootScope.currentTrip.trip;
		$scope.location = $rootScope.currentTrip.location;
		$scope.description = $rootScope.currentTrip.description;
		$scope.images = $rootScope.currentTrip.images;

		parseImages();
	}

	$scope.back = function() {
		$state.go("exploration.all");
	}

	$scope.viewImage = function(img) {
		$rootScope.$broadcast('showLightbox', img);
	}

	function adjustRows() {
		var w = $window.innerWidth;

		if ($scope.images.length > 0) {
			if (w < 1550 && w > 1180) {
				if ($scope.itemsPerRow != 3) {
					$scope.itemsPerRow = 3;
					parseImages();
					$scope.$apply();
				}
			} else if (w < 1140) {
				if ($scope.itemsPerRow != 2) {
					$scope.itemsPerRow = 2;
					parseImages();
					$scope.$apply();
				}	
			} else if (w > 1550) {
				if ($scope.itemsPerRow != 4) {
					$scope.itemsPerRow = 4;
					parseImages();
					$scope.$apply();
				}
			}
		}
	}

	function parseImages() {
		$scope.displayImages = [[]];
		var group = 0;

		for (var i = 0; i < $scope.images.length; i++) {
			if ($scope.displayImages[group].length == $scope.itemsPerRow) {
				$scope.displayImages.push([]);
				group++;
			}

			$scope.displayImages[group].push($scope.images[i]);
		};
	}

	angular.element($window).bind('resize', function () {
		adjustRows();
	});
}]);