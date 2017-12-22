
var app = angular.module("test", []);

// part Controller
app.controller("control", function ($scope) {

    $scope.name = "Alex";
    $scope.reverseName = function () {
        $scope.name = $scope.name.split('').reverse().join('');
    };
});

// part of directive

app.directive("myDirective", function () {
    return{
     restrict: "EA",
        scope: false,
        template : "<div>Your name is : {{name}}</div>" +
                 "Change your name :  <input type='text' ng-model='name' />"
    };
});