app.controller('homeController',['$scope', '$location', '$timeout', function($scope, $location, $timeout) {
	/*$timeout(function () {
		var csf = $("#cloudFirst").clone();
		var cs = $("#clouds").clone();
		var cs2 = $("#clouds2").clone();

		$("#cloudFirst").remove();
		$("#clouds").remove();
		$("#clouds2").remove();

		$("#home-container").prepend(csf);
		$("#home-container").prepend(cs);
		$("#home-container").prepend(cs2);
	}, 250);/
	
}]);