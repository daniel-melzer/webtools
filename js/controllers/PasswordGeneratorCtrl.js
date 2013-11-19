angular.module('WebTools').controller('PasswordGeneratorCtrl', function($scope) {


	$scope.radioLength = 8;
	$scope.radioHash = 1;
	$scope.passwords = [];
	$scope.selectedPassword = '';
	$scope.prefix = '';
	$scope.suffix = '';
	$scope.hash = '';


	/**
	 * Generate 8 random passwords.
	 */
	$scope.generatePassword = function() {
		var chars  = [
				['bcdfgjklmnprstvwxz', 17],
				['aeiou', 4]
		];

		for(var i = 0; i < 8; ++i) {
			var password = '';
			for(var l = 0; l < ($scope.radioLength - 2); ++l) {
				password += chars[l % 2][0].substr(Math.round(Math.random() * chars[l % 2][1]), 1);
			}
			for(l = 0; l < 2; ++l) {
				password += Math.floor(Math.random() * 10);
			}

			$scope.passwords[i] = password;
		}

		//Prevent empty option in select box.
		$scope.selectedPassword = $scope.passwords[0];

		$scope.generateHash();
	};

	/**
	 * Generates the hash value for the selected password.
	 */
	$scope.generateHash = function() {
		var hash  = $scope.prefix + $scope.selectedPassword + $scope.suffix;
		switch($scope.radioHash) {
			case 1://MD5
				hash = CryptoJS.MD5(hash);
				break;
			case 2://SHA1
				hash = CryptoJS.SHA1(hash);
				break;
			case 3://SHA256
				hash = CryptoJS.SHA256(hash);
				break;
		}

		$scope.hash = hash.toString();
	}

});