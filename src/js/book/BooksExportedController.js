App.controller('BooksExportedCtrl', ['$scope','Books','$routeParams','Notify','Categories', function ($scope,Books,$routeParams,Notify,Categories) {
	$scope.categories = Categories.get();
    $scope.books = Books.get(0);
}]);