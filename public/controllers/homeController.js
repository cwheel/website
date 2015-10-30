app.controller('homeController',['$scope', '$location', '$timeout', function($scope, $location, $timeout) {
	/*Temporary fix for Safari
	@Issue: Around 50% of the time, loading this view in Safari
	reulsts in a broken animaiton where the clouds seem to freeze
	on their first step.
	
	@Fix:
	Remove all of the broken clouds, clone them and then put them
	back into the view. Not a permenant soultion.
	*/
	$timeout(function () {
		var base = $("#clouds-layer-base").clone();
		var c1 = $("#clouds-layer-1").clone();
		var c2 = $("#clouds-layer-2").clone();
		var c3 = $("#clouds-layer-3").clone();

		$("#clouds-layer-base").remove();
		$("#clouds-layer-1").remove();
		$("#clouds-layer-2").remove();
		$("#clouds-layer-3").remove();

		$("#home-container").prepend(base);
		$("#home-container").prepend(c1);
		$("#home-container").prepend(c2);
		$("#home-container").prepend(c3);
	}, 250);
	
}]);