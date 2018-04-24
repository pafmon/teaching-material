angular
  .module("ContactManagerApp")
  .controller("ListCtrl",["$scope","$http",function ($scope,$http){
    
    console.log("List Controller initialized");
    
    function refresh(){
      $http
          .get("/api/v1/contacts")
          .then(function (response){
              $scope.contacts = response.data;
                  
          });
    }  
    
    $scope.addContact = function (){
      $http
        .post("/api/v1/contacts",$scope.newContact)
        .then(function (response){
            console.log("Contact added");
            refresh();
        });
    
    }

    $scope.deleteContact = function (name){
      console.log("Deleting contact "+name+"....");
    }
  
    refresh();
  }]);
