console.log('Players Factory');
app.factory('playersFactory', ['$http', function($http) {
  var players = [];
  var player = {};

  // Function for our playerFactory constructor
  function PlayersFactory(){

    var _this = this;

    var players = [];


    this.index = function(callback){
      //call this method if you want to update or set the players variable
      $http.get('/players')
        .then(callback)
        .catch(handleErrors)

        console.log('running factory index function')
      //Note: this can be shortened to $http.get('/players').then(callback);
      //But only if you only want to run the callback from the controller.
    };

    this.create = function(player, callback){
      console.log("new_player data from the controller and now being sent to players.js controller via routes.js", newPlayer);
      $http.post('/players', player).then(function(data){
        console.log("data returned from create new player from server", data.data);
        if (typeof(callback) === 'function'){

          // PROBLEM AREA
          // add new player to the players array? - it updates when comes back to the root route
          console.log('Returned data type should be function and is a -> '+ typeof(callback));
          console.log('data.data' + data.data.player._id);
          console.log(data.data.player.name); // Undefined but should be name

          callback(data.data);

        }
      })
      .catch(handleErrors)
    };

    this.delete = function(player, callback){
      console.log("deleting a player ", player);

      $http.delete('/players/'+player._id, player).then(function(data){
        console.log("data from server from delete ", data.data);

        if (typeof(callback) === 'function'){
          $http.get('/players').then(function(data){
            console.log('data from index factory',data.data);
            players = data.data;
            callback(players);
          });
        }
      });
    };

    this.addPlayerToTeam = function(newAssoc){
      newAssoc = {
        playerId: newAssoc.playerObject._id,
        teamId: newAssoc.teamObject._id,
        }
        console.log('Sending newAssoc to routes', newAssoc)
      $http.post('/associations', newAssoc)
      .then(function(response){
        // var player = response.data.player;
        // var team = response.data.team;
        // player.team = team;
        console.log('response data', response);
        if(response.data.success){
          // playersFactory.players.push(player)
          console.log('successful!!!!', player);
          players.push(player);
          console.log(players);
          //Am I missing a callback?
        }
      })
    };

    this.removePlayerFromTeam = function(player){
      // console.log('in factory doing removeplayerfromteam > ', playerId);
      console.log(typeof(player))
      console.log(player);
      console.log(player._id)
      playerId = player
      $http.delete('/associations/'+player, playerId)
      .then(function(response){
        // console.log('response from players', response);
      })
    }

    this.getPlayers = function(callback){
      console.log('callback function with players')

      callback(players);
    };

    this.getPlayer = function(callback){
        console.log('callback function with player')
        callback(player);
    };
  }
  console.log(new PlayersFactory());
  return new PlayersFactory();
}]);

function handleErrors(err){
  console.log(err);
}
