var app = angular.module('dataGridAssignment', []);

app.controller("playerController", function($scope, $http) {
    var url = "data.json";
    
    $http.get(url).success(function(response) {
        $scope.players = response;
    });
})