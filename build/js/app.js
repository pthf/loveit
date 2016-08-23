(function(){
	var app = angular.module('loveitSite', [
		'ngRoute',
		'loveitSite.controllers',
		'loveitSite.directives'
	]);
	app.config(['$routeProvider', '$locationProvider' , function($routeProvider, $locationProvider){
		$routeProvider
			.when('/home', {
				templateUrl: './views/home.html',
				controller: 'menuItemController'
			})
			.when('/nosotros', {
				templateUrl: './views/nosotros.html'
			})
			.when('/espacios', {
				templateUrl: './views/espacios.html',
				controller: 'menuItemController'
			})
			.when('/habitaciones', {
				templateUrl: './views/habitaciones.html',
				controller: 'menuItemController'
			})
			.otherwise({
				redirectTo: '/home'
			});
			// $locationProvider.html5Mode(true);
	}]);
})();
