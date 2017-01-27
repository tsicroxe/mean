app.controller('associationsController', ['$scope','playersFactory', 'teamsFactory', function($scope, playersFactory, teamsFactory) {

   $scope.players = [];
   $scope.teams = [];

//When this controller is loaded, fetch the player list

playersFactory.getPlayers(function(players){
   $scope.players = players;
})

//When this controller is loaded, fetch the team list
teamsFactory.getTeams(function(teams){
   $scope.teams = teams;
})

//Pass the player index and team name to create association
$scope.addPlayerToTeam = function(){
   playersFactory.addPlayerToTeam($scope.newAssoc);
}

//Pass $index to PlayerFactory to remove the player's team
$scope.removePlayerFromTeam = function($index){
   playersFactory.removePlayerFromTeam($index);
}

console.log($scope.teams)

//why doesn't this rerun when I click associations again?

}]);
