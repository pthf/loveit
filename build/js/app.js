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
			.otherwise({
				redirectTo: '/home'
			});
			// $locationProvider.html5Mode(true);
	}]);
})();
