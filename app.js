const app = angular.module("TodoApp", []);
app.controller("TodoController", function($scope) {
    $scope.title = "Todo list";
    $scope.list = ["Manger", "boire", "respirer", "courir", "rire", "jouer"];
    $scope.removeItem = function(index){
      $scope.list.splice(index, 1);
    }
    $scope.addItem = function(item) {
        if (item === null || item === undefined || item === "") {
            return;
        }

        $scope.list.push(item);
        $scope.newItem = null;
    };
});
