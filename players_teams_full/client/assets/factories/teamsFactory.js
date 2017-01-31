console.log('Teams Factory');
app.factory('teamsFactory', ['$http', function($http) {
  // constructor for our factory

  var teams = [];
  var team = {};

  function TeamsFactory(){

    var _this = this;

    this.index = function(callback){

      //call this method if you want to update or set the teams variable
      $http.get('/teams').then(function(returned_data){
        console.log('calling factory index and grabbing returned_data from factory')
        console.log(returned_data.data);
        teams = returned_data.data;
        callback(teams);
      });
      //Note: this can be shortened to $http.get('/teams').then(callback);
      //But only if you only want to run the callback from the controller.

    this.create = function(newTeam, callback){
      $http.post('/teams', newTeam).then(function(returned_data){
        console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };

    this.update = function(){ // what parameters do we need?
      // Your code here


      $http.put('/teams').then(function(){

      })

    };
    };

    this.delete = function(team, callback){
      console.log("deleting a team ", team);

      $http.delete('/teams/'+team._id, team).then(function(data){
        console.log("data from server from delete ", data.data);
        if (typeof(callback) === 'function'){
          // I should return all teams and update teams array

          $http.get('/teams').then(function(data){
            console.log('data from index factory',data.data);
            teams = data.data;
            callback(teams);
          });

        }
      });
    };

    this.show = function(){// what parameters do we need?
        // Your code here
    };
    // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    this.getTeams = function(callback){
            console.log('callback function with teams')
      callback(teams);
    };
    this.getTeam = function(callback){
            console.log('calback function with team')
        callback(team);
    };
  }
  console.log(new TeamsFactory());
  return new TeamsFactory();
}]);

function handleErrors(err){
  console.log(err);
}
