var app = angular.module('app', ['anim-in-out', 'ui.router', 'ngAnimate']);

app.config(['$stateProvider','$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
	$urlRouterProvider.otherwise("/");
	$locationProvider.html5Mode(true);

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl : 'views/home.html',
			controller  : 'homeController'
		})
		.state('about', {
			url: '/about',
			templateUrl : 'views/about.html',
			controller  : 'aboutController'
		})
		.state('projects', {
			url: '/projects',
			templateUrl : 'views/projects.html',
			controller  : 'projectsController'
		})
		.state('projects.all', {
			url: '/all',
			templateUrl : 'views/project-views/all.html',
			controller  : 'projectAllController'
		})
		.state('projects.detail', {
			url: '/detail',
			templateUrl : 'views/project-views/detail.html',
			controller  : 'projectDetailController'
		})
		.state('exploration', {
			url: '/exploration',
			templateUrl : 'views/exploration.html',
			controller  : 'explorationController'
		})
		.state('exploration.all', {
			url: '/all',
			templateUrl : 'views/exploration-views/all.html',
			controller  : 'explorationAllController'
		});
}]);

app.directive('background', function($parse) {
    return function(scope, element, attrs) {
    	scope.$watch(attrs.background, function() {
	        element.css({
	            'background-image': 'url(' + $parse(attrs.background)(scope) +')'
	        });
	    });
    };
});

app.directive('size', function($parse) {
    return function(scope, element, attrs) {
    	scope.$watch(attrs.size, function() {
	        element.css({
	            'width': $parse(attrs.size)(scope)[0],
	            'height': $parse(attrs.size)(scope)[1],
	        });
	    });
    };
});

app.directive('showlightbox', function($parse){
    return function(scope, element, attrs) {
    	scope.$watch(attrs.showlightbox, function() {
	    	if ($parse(attrs.showlightbox)(scope) == true) {
	    		element.css({
	    		    'visibility': 'visible',
	    		    'opacity': 1
	    		});
	    	} else {
	    		element.css({
	    		    'visibility': 'hidden',
	    		    'opacity': 0
	    		});
	    	}
    	});
    };
});