var WebToolsApp = angular.module('WebToolsApp', [
	'ui.bootstrap',
	'ngRoute',
	'WebToolsController'
]);

WebToolsApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
			.when('/password', {
				templateUrl: 'js/partials/password-form.html',
				controller: 'PasswordGeneratorCtrl'
			})
			.when('/timestamp', {
				templateUrl: 'js/partials/timestamp-form.html',
				controller: 'TimestampConverterCtrl'
			})
			.otherwise({ redirectTo: '/password' });
}]);