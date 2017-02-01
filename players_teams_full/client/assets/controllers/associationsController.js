app.controller('associationsController', ['$scope','playersFactory', 'teamsFactory', function($scope, playersFactory, teamsFactory) {

   $scope.players = [];
   $scope.teams = [];

//When this controller is loaded, fetch the player list


// MIGHT ALL OF THIS BE NECESSARY?

// Iniital call of index() to instantiate player list
var playersIndex = function(){
                     playersFactory.index(function(players){
                       $scope.players = players.data;
                       console.log('in the associationsController getting players ', players)
                     });

         };
playersIndex();

var teamsIndex = function(){
                     teamsFactory.index(function(teams){
                        $scope.teams = teams;
                        console.log('in the associationsController getting teams ', teams)
                     });
};
teamsIndex()



// playersFactory.getPlayers(function(players){
//    console.log('getting players ', players)
//    $scope.players = players;
// })

$scope.getPlayers = function(){

   playersFactory.getPlayers(function(players){
      console.log('getting players ', players)
      $scope.players = players;
   })
}


teamsFactory.getTeams(function(teams){
   console.log('getting teams ', teams)

   $scope.teams = teams;
})
//When this controller is loaded, fetch the team list

//Pass the player index and team name to create association
$scope.addPlayerToTeam = function(newAssoc){
   console.log($scope.newAssoc)
   playersFactory.addPlayerToTeam($scope.newAssoc);
}

//Pass $index to PlayerFactory to remove the player's team
$scope.removePlayerFromTeam = function(changeThisVariable){
  console.log(changeThisVariable)
   playersFactory.removePlayerFromTeam(changeThisVariable);
}


//why doesn't this rerun when I click associations again?

}]);
