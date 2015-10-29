app.controller('mainController',['$scope', '$location', '$timeout', function($scope, $location, $timeout) {
	$scope.shouldResume = false;
	/*$(window).resize(function(){
    	$(".nav-bar").css('top', ($("#content").offset().top/2) - $(".nav-bar").height());
	});

	$scope.$watch('showNav', function () {
		$(".nav-bar").css('top', ($("#content").offset().top/2) - $(".nav-bar").height());
	});*/

	$scope.resumeClick = function() {
		console.log($scope.shouldResume);
		if ($scope.shouldResume) {
			$scope.showNav = false;
		}
	};

	$scope.switchRoutes = function(route) {
		$timeout(function() {
				$scope.showNav = false;
		}, 100);
		
		$location.path("/" + route);
	};

	$scope.$watch('showNav', function () {
		if (!$scope.showNav) {
			$scope.shouldResume = false;
		} else {
			$timeout(function() {
				$scope.shouldResume = true;
			}, 500);
		}
	});
}]);