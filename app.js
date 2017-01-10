const app = angular.module("TodoApp", []);
app.controller("TodoController", function($scope) {
    $scope.title = "Todo list";
    $scope.list = ["Eat", "Drink", "Breath", "Run", "Laugh", "Playing"];
    $scope.removeItem = function(index) {
        $scope.list.splice(index, 1);
    }

    $scope.deleteAll = function() {
        $scope.list.splice(0, $scope.list.length);
    };

    $scope.addItem = function(item) {
        if (item === null || item === undefined || item === "") {
            return;
        }
        $scope.list.push(item);
        $scope.newItem = null;
    
    };
});
