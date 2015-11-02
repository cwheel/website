app.controller('detailController',['$scope', '$state', function($scope, $state) {
	$scope.lightboxIsVisible = false;
	$scope.lightboxImage = "";

	$scope.back = function() {
		$state.go("projects.all");
	}

	$scope.showImage = function() {
		$scope.lightboxImage = "res/wood.jpg";
		$scope.lightboxIsVisible = true;
		console.log("twas set to : " + $scope.lightboxIsVisible);
	};

	$scope.$on('navigationShowning', function(e, args) {
		$scope.lightboxIsVisible = false;
	});
}]);