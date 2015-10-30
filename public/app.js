var app = angular.module('app', ['anim-in-out', 'ui.router', 'ngAnimate']);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/");

	$stateProvider
		.state('/', {
			url: '/',
			templateUrl : 'views/home.html',
			controller  : 'homeController'
		})
		.state('/about', {
			url: '/about',
			templateUrl : 'views/about.html',
			controller  : 'aboutController'
		})
		.state('/projects', {
			url: '/projects',
			templateUrl : 'views/projects.html',
			controller  : 'projectsController'
		})
		.state('/projects.all', {
			url: '/all',
			templateUrl : 'views/projects/all.html',
			controller  : 'projectsController'
		})
		.state('/projects.detail', {
			url: '/detail',
			templateUrl : 'views/projects/detail.html',
			controller  : 'projectsController'
		})
		.state('/exploration', {
			url: '/exploration',
			templateUrl : 'views/exploration.html',
			controller  : 'projectsController'
		});
}]);