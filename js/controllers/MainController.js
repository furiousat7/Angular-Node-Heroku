app.controller('MainController', ['$scope', function($scope) {
	$scope.list = ["List item 1", "List item 2", "List item 3"];
	$scope.addToDo = function() {
		$scope.list.push($scope.textInput);
	}
}])