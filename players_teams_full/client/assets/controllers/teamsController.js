app.controller('teamsController', ['$scope','teamsFactory', function($scope, teamsFactory) {


   $scope.teams = [];

   var index = function(){
                        teamsFactory.index(function(returnedData){
                          $scope.teams = returnedData;
                          console.log($scope.teams[0])
                        });
                        console.log('running teams Controller index')
            };
   index();



   $scope.create = function(team){
      console.log('running teams create function in teamsController ', team);
      teamsFactory.create(team, function(data){
        console.log('added enw team ', data)
      index();
      $scope.team = {}
    });
   }

   $scope.delete = function(team){
     console.log("deleing a team ", team);
     // var conf = confirm("Are you sure you want to delete "+ team._id);
     var conf = true;
     if (conf){
       console.log('true)')
        teamsFactory.delete(team, function(data){
           console.log("data from delete from factory ", data);
           index()
        });
     }
  };

}]);
