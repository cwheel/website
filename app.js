var portfolio = angular.module('app', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'routes/home.html',
			controller  : 'homeController'
		})
		.when('/about', {
			templateUrl : 'routes/about.html',
			controller  : 'aboutController'
		})
		.when('/projects', {
			templateUrl : 'routes/projects.html',
			controller  : 'projectsController'
		})
		.when('/exploration', {
			templateUrl : 'routes/exploration.html',
			controller  : 'projectsController'
		});
		
		//$locationProvider.html5Mode(true);
}]);