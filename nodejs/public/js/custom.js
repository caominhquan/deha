var app = angular.module("appDemo",["ngRoute","ngAnimate"]);
app.directive("headerApp",function(){
	return {
		restrict: "A",
		templateUrl: "/header.html"
	}
});
app.directive("footerApp",function(){
	return {
		restrict: "A",
		templateUrl: "/footer.html"
	}
});
app.config(['$routeProvider',function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "list.html"
    })
    .when("/detail/:contact_id", {
       templateUrl : "detail.html",
       controller: "detailController"
    })
    .when("/edit/:contact_id", {
       templateUrl : "edit.html",
       controller: "editController"
    }).otherwise({ redirectTo: '/' });
}]);
app.controller("dataController",function($scope,$rootScope,$routeParams,$http){
	// $rootScope.contacts = contacts;
	$http.get("/hahaha").
		then(function(result, status, headers, config){
			console.log(result);
			$rootScope.hahaha = result.data.data;
			});
	$rootScope.page = 1;
	$scope.changePage = function(p){
		$rootScope.page = p;
	};
	$rootScope.contact_id = -1;
});
app.controller("detailController",function($scope,$rootScope,$routeParams){
	var contact_id = $routeParams.contact_id;
	$scope.detail = $scope.contacts[contact_id];
	$rootScope.contact_id = contact_id;
});
app.controller("editController",function($scope,$rootScope,$routeParams){
	$scope.detail = $rootScope.contacts[$rootScope.contact_id];
	$scope.submit = function(){
		$rootScope.contacts[$rootScope.contact_id] = {
			name: $scope.detail.name,
			phone: $scope.detail.phone,
			address: $scope.detail.address,
		}
	};
});