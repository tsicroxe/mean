console.log('Players Factory');
app.factory('playersFactory', ['$http', function($http) {
  var players = [
    {name:"Bob"},
    {name:"Aaron"},
    {name:"Sue"}
  ];
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


    this.getPlayers = function(callback){
      callback(players);
    };
    this.getPlayer = function(callback){
        callback(player);
    };
  }
  console.log(new PlayersFactory());
  return new PlayersFactory();
}]);

function handleErrors(err){
  console.log(err);
}
