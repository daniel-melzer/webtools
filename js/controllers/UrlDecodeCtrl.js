var WebToolsController = WebToolsController || angular.module('WebToolsController', []);

WebToolsController.controller('UrlDecodeCtrl', ['$scope', function($scope) {


	$scope.dencoder = '';

	/**
	 * Encodes string.
	 */
	$scope.encode = function() {
		var unencoded = $scope.dencoder;
		$scope.dencoder = encodeURIComponent(unencoded).replace(/'/g, "%27").replace(/"/g, "%22");
	};

	/**
	 * Decodes string.
	 */
	$scope.decode = function() {
		var encoded = $scope.dencoder;
		$scope.dencoder = decodeURIComponent(encoded.replace(/\+/g,  " "));
	};

}]);
