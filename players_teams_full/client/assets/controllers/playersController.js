app.controller('playersController', ['$scope','playersFactory', function($scope, playersFactory) {

   $scope.players = [];

	 // Index function made into variable to be called anytime we need to refresh page.
   var index = function(){
                        playersFactory.index(function(players){
                          $scope.players = players.data;

                        });
                        console.log('in the controller getting players')
            };

		// Iniital call of index() to instantiate player list
	 index();


	 // Creates a player. Takes in form data from index.html and passes to playersFactory
   $scope.create = function(player){
		console.log("before adding new_player ", player);
		playersFactory.create(player, function(data){
			console.log("added new player ", data);
			index();
			$scope.player= {}
		});
	};

	// Deletes a player. Takes in form data from index.html and passes to playersFactory
   $scope.delete = function(player){
		console.log("deleing a player ", player);
		// var conf = confirm("Are you sure you want to delete "+ player._id);
		var conf = true;
		if (conf){
			playersFactory.delete(player, function(data){
				console.log("data from delete from factory ", data);
				index()
			});
		}
	};
}]);
