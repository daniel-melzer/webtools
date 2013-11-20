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
			.when('/urldecode', {
				templateUrl: 'js/partials/urldecode.html',
				controller: 'UrlDecodeCtrl'
			})
			.when('/converter', {
				templateUrl: 'js/partials/number-converter.html',
				controller: 'NumberConverter'
			})
			.otherwise({ redirectTo: '/password' });
}]);