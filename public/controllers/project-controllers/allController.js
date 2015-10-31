app.controller('allController',['$scope', '$state', '$http', function($scope, $state, $http) {
	$scope.projects = [[]];

	$http.get("/data/projects.json").success(function (resp) {
		var respProjs = angular.fromJson(resp).projects;
		var group = 0;

		for (var i = 0; i < respProjs.length; i++) {
			if ($scope.projects[group].length == 4) {
				$scope.projects.push([]);
				group++;
			}

			$scope.projects[group].push(respProjs[i]);
		};
	});

	$scope.projectSelected = function() {
		$state.go("projects.detail");
	};
}]);