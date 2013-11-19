var WebToolsController = WebToolsController || angular.module('WebToolsController', []);

WebToolsController.controller('TimestampConverterCtrl', ['$scope', function($scope) {


	$scope.year = '';
	$scope.month = '';
	$scope.day = '';
	$scope.hour = 0;
	$scope.minute = 0;
	$scope.second = 0;
	$scope.tsmp = null;


	/**
	 * Converts given values.
	 */
	$scope.convertTime = function() {
		//Timestamp or date set?
		if('' != $scope.tsmp && null !== $scope.tsmp) {
			tsmp2datetime();
		} else {
			datetime2tsmp();
		}
	};

	$scope.reset = function() {
		$scope.year = '';
		$scope.month = '';
		$scope.day = '';
		$scope.hour = 0;
		$scope.minute = 0;
		$scope.second = 0;
		$scope.tsmp = null;
	};

	/**
	 * Converts timestamp in date/time.
	 */
	var tsmp2datetime = function() {
		var datetime = new Date(($scope.tsmp * 1000));

		$scope.year = datetime.getFullYear();
		$scope.month = (datetime.getMonth() + 1);
		$scope.day = datetime.getDate();

		$scope.hour = datetime.getHours();
		$scope.minute = datetime.getMinutes();
		$scope.second = datetime.getSeconds();
	};

	/**
	 * Converts date/time in timestamp.
	 */
	var datetime2tsmp = function() {
		var datetime = new Date();

		datetime.setFullYear($scope.year);
		datetime.setMonth($scope.month - 1);
		datetime.setDate($scope.day);

		datetime.setHours($scope.hour);
		datetime.setMinutes($scope.minute);
		datetime.setSeconds($scope.second);

		$scope.tsmp = Math.floor((datetime.getTime() / 1000));
	};

}]);
