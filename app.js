const app = angular.module("TodoApp", []);
app.controller("TodoController", function($scope) {
    $scope.title = "Bonjour";
    $scope.list = ["Manger", "boire", "respirer", "courir", "rire", "jouer"];
    $scope.addItem = function(item) {
        $scope.list.push(item);
        $scope.newItem = null;
    };
});
