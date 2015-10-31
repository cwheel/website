app.controller('detailController',['$scope', '$state', function($scope, $state) {
	$scope.back = function() {
		$state.go("projects.all");
	}
}]);