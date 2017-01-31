app.controller('associationsController', ['$scope','playersFactory', 'teamsFactory', function($scope, playersFactory, teamsFactory) {

   $scope.players = playersFactory.players;
   $scope.teams = teamsFactory.teams;

//When this controller is loaded, fetch the player list


// MIGHT ALL OF THIS BE NECESSARY?

var playersIndex = function(){
                     playersFactory.index(function(players){
                       $scope.players = players.data;
                       console.log('in the controller getting players ', players)
                     });

         };
// var teamsIndex = function(){
//                      teamsFactory.index(function(teams){
//                         $scope.teams = teams.data;
//                         console.log('in the controller getting teams ', teams)
//                      });
// };
 // Iniital call of index() to instantiate player list
playersIndex();
// teamsIndex()


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


//When this controller is loaded, fetch the team list
teamsFactory.getTeams(function(teams){
   console.log('getting teams ', teams)

   $scope.teams = teams;
})

//Pass the player index and team name to create association
$scope.addPlayerToTeam = function(newAssoc){
   console.log($scope.newAssoc)
   playersFactory.addPlayerToTeam($scope.newAssoc);
}

//Pass $index to PlayerFactory to remove the player's team
$scope.removePlayerFromTeam = function($index){
   playersFactory.removePlayerFromTeam($index);
}


//why doesn't this rerun when I click associations again?

}]);
