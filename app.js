const app = angular.module("TodoApp", []);
app.controller("TodoController", function($scope) {
    $scope.title = "Bonjour";
$scope.list = ["Manger","boire","respirer","courir","rire","jouer"];
});
