angular
  .module("ContactManagerApp")
  .controller("EditCtrl",["$scope","$http","$routeParams","$location"
    ,function ($scope,$http,$routeParams,$location){
    console.log("Edit Controller initialized");
    function refresh(){
      $http
          .get("/api/v1/contacts/"+$routeParams.name)
          .then(function (response){
              $scope.updatedContact = response.data;
                  
          });
    }  
    $scope.updateContact = function (){
      $http
        .put("/api/v1/contacts/"+$routeParams.name,$scope.updatedContact)
        .then(function (response){
            console.log("Contact updated");
            $location.path("/");
        });
    
    }
 
    refresh();
  }]);
