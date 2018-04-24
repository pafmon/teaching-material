angular.module("ContactManagerApp",["ngRoute"]).config(function ($routeProvider){

    $routeProvider
    .when("/",{
        templateUrl : "list.html",
        controller : "ListCtrl"
    })
    .when("/contact/:name",{
        templateUrl : "edit.html",
        controller : "EditCtrl"
    });


    console.log("App initialized and configured");
});
