app.controller('projectsController',['$scope', '$state', function($scope, $state) {
	$state.go("projects.all");
}]);