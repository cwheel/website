app.controller('allController',['$scope', '$state', function($scope, $state) {
	$scope.projectSelected = function() {
		$state.go("projects.detail");
	};
}]);