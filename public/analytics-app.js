angular.module("AnalyticsApp",["ngRoute"]).config(function ($routeProvider){

    $routeProvider
    .when("/",{
        templateUrl : "main.html",
        controller : "MainCtrl"
    });

    console.log("App initialized and configured");
});
