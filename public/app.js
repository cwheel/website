var app = angular.module('app', ['anim-in-out', 'ui.router', 'ngAnimate']);

app.config(['$stateProvider','$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
	$urlRouterProvider.otherwise("/");
	//$locationProvider.html5Mode(true);

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
			controller  : 'allController'
		})
		.state('projects.detail', {
			url: '/detail',
			templateUrl : 'views/project-views/detail.html',
			controller  : 'detailController'
		})
		.state('exploration', {
			url: '/exploration',
			templateUrl : 'views/exploration.html',
			controller  : 'projectsController'
		});
}]);

app.directive('background', function(){
    return function(scope, element, attrs) {
        element.css({
            'background-image': 'url(' + attrs.background +')'
        });
    };
});

app.directive('rendersoffscreen', function(){
    return function(scope, element, attrs) {
    	if (attrs.rendersoffscreen == "true") {
    		element.css({
    		    'overflow': 'hidden'
    		});
    	} else {
    		element.css({
    		    'overflow': 'scroll'
    		});
    	}
    };
});