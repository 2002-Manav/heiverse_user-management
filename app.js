// app.js

var app = angular.module("myApp", []);

app.controller("UserController", function ($scope, $http) {
  $http.get("/api/users").then(function (response) {
    $scope.users = response.data;
  });

  // For demonstration, you can add a new user
  $http.post("/api/users", { name: "New User" }).then(function (response) {
    $scope.users.push(response.data);
  });
});
