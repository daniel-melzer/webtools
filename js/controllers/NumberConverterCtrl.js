var WebToolsController = WebToolsController || angular.module('WebToolsController', []);

WebToolsController.controller('NumberConverter', ['$scope', function($scope) {


	$scope.bin;
	$scope.ten;
	$scope.qui;
	$scope.oct;
	$scope.dec;
	$scope.hex;


	/**
	 * Converts binary number in other formats.
	 */
	$scope.convertFromBin = function() {
		var number = parseInt($scope.bin, 2);

		$scope.ten = number.toString(3);
		$scope.qui = number.toString(5);
		$scope.oct = number.toString(8);
		$scope.dec = number;
		$scope.hex = number.toString(16).toUpperCase();
	};

	/**
	 * Converts tenary number in other formats.
	 */
	$scope.convertFromTen = function() {
		var number = parseInt($scope.ten, 3);

		$scope.bin = number.toString(2);
		$scope.qui = number.toString(5);
		$scope.oct = number.toString(8);
		$scope.dec = number;
		$scope.hex = number.toString(16).toUpperCase();
	};

	/**
	 * Converts quinary number in other formats.
	 */
	$scope.convertFromQui = function() {
		var number = parseInt($scope.qui, 5);

		$scope.bin = number.toString(2);
		$scope.ten = number.toString(3);
		$scope.oct = number.toString(8);
		$scope.dec = number;
		$scope.hex = number.toString(16).toUpperCase();
	};

	/**
	 * Converts octal number in other formats.
	 */
	$scope.convertFromOct = function() {
		var number = parseInt($scope.oct, 8);

		$scope.bin = number.toString(2);
		$scope.ten = number.toString(3);
		$scope.qui = number.toString(5);
		$scope.dec = number;
		$scope.hex = number.toString(16).toUpperCase();
	};

	/**
	 * Converts decimal number in other formats.
	 */
	$scope.convertFromDec = function() {
		var number = parseInt($scope.dec);

		$scope.bin = number.toString(2);
		$scope.ten = number.toString(3);
		$scope.qui = number.toString(5);
		$scope.oct = number.toString(8);
		$scope.hex = number.toString(16).toUpperCase();
	};

	/**
	 * Converts hexadecimal number in other formats.
	 */
	$scope.convertFromHex = function() {
		var number = parseInt($scope.hex, 16);

		$scope.bin = number.toString(2);
		$scope.ten = number.toString(3);
		$scope.qui = number.toString(5);
		$scope.oct = number.toString(8);
		$scope.dec = number;
	};

	$scope.reset = function() {
		$scope.bin = '';
		$scope.ten = '';
		$scope.qui = '';
		$scope.oct = '';
		$scope.dec = '';
		$scope.hex = '';
	};

}]);
