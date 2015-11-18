app.controller('mainController',['$scope', '$state', '$timeout', '$rootScope', '$window', function($scope, $state, $timeout, $rootScope, $window) {
	$scope.shouldResume = false;
	$scope.lightboxIsVisible = false;
	$scope.lightboxImage = "";
	$scope.renderLightbox = 'none';

	$scope.lightboxSize = [0,0];
	var lightboxScale = 0.75;

	$scope.resumeClick = function() {
		if ($scope.shouldResume) {
			$scope.showNav = false;
		}
	};

	$scope.switchViews = function(route) {
		$timeout(function() {
			$scope.showNav = false;
		}, 100);

		$state.go(route);
	};

	$scope.$watch('showNav', function () {
		if (!$scope.showNav) {
			$rootScope.$broadcast('navigationHidden');
			$scope.shouldResume = false;
		} else {
			$timeout(function() {
				$scope.shouldResume = true;
			}, 500);

			$scope.lightboxIsVisible = false;
			//$rootScope.$broadcast('navigationShowning');
		}
	});

	$scope.$on('showLightbox', function(e, args) {
		console.log("");
		//For a 16:9 image filling ~60% of the window
		var wp = (($window.innerWidth * lightboxScale) - (($window.innerWidth * lightboxScale) % 16)) / 16;
		var hp = (($window.innerHeight * lightboxScale) - (($window.innerHeight * lightboxScale) % 9)) / 9;
		var prop = wp < hp ? wp : hp;

		$scope.lightboxSize = [prop*16, prop*9];

		$scope.lightboxImage = args;
		$scope.lightboxIsVisible = true;
	});

	//Quick fix for lightbox display issue
	$timeout(function() {
		$scope.renderLightbox = '';
	}, 1000);
}]);