app.controller('projectAllController',['$scope', '$state', '$http', '$window', '$rootScope', '$timeout', function($scope, $state, $http, $window, $rootScope, $timeout) {
	$scope.projects = [[]];
	$scope.itemsPerRow = 4;
	$scope.projectsData = [];


	$http.get("/data/projects.json").success(function (resp) {
		$scope.projectsData = angular.fromJson(resp).projects;
		parseProjects();
	});

	$scope.projectSelected = function(i,j) {
		//Should get a better method of doing this. Can't broadcast as
		//the destination controller isn't up and running yet
		$rootScope.currentProject = $scope.projects[i][j];
		$state.go("projects.detail");
	};

	function adjustRows() {
		var w = $window.innerWidth;

		if ($scope.projectsData.length > 0) {
			if (w < 1550 && w > 1180) {
				if ($scope.itemsPerRow != 3) {
					$scope.itemsPerRow = 3;
					parseProjects();
					$scope.$apply();
				}
			} else if (w < 1140) {
				if ($scope.itemsPerRow != 2) {
					$scope.itemsPerRow = 2;
					parseProjects();
					$scope.$apply();
				}	
			} else if (w > 1550) {
				if ($scope.itemsPerRow != 4) {
					$scope.itemsPerRow = 4;
					parseProjects();
					$scope.$apply();
				}
			}
		}
	}

	function parseProjects() {
		$scope.projects = [[]];
		var group = 0;

		for (var i = 0; i < $scope.projectsData.length; i++) {
			if ($scope.projects[group].length == $scope.itemsPerRow) {
				$scope.projects.push([]);
				group++;
			}

			$scope.projects[group].push($scope.projectsData[i]);
		};
	}

	angular.element($window).bind('resize', function () {
		adjustRows();
	});

	$timeout(adjustRows, 100);
}]);