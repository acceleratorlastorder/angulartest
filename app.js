const app = angular.module("TodoApp", []);
app.controller("TodoController", function($scope) {
    $scope.title = "Bonjour";
    $scope.list = ["Manger", "boire", "respirer", "courir", "rire", "jouer"];
    $scope.addItem = function(item) {
      if (item === null || item === undefined || item === "") {
        return;
      }
        $scope.list.push(item);
        $scope.newItem = null;
    };
});
