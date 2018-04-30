angular
  .module("AnalyticsApp")
  .controller("MainCtrl",["$scope","$http",function ($scope,$http){
    
    console.log("main Controller initialized");
     
    $scope.update = function (){
      
      $http
          .get("/api/v1/data")
          .then(function (response){
              $scope.data = response.data;
              console.log("Data received:"+$scope.data);              
          });
    }

    $scope.update();
    
  }]);
