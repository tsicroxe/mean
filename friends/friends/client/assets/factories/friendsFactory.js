console.log('Friends Factory');
app.factory('friendsFactory', ['$http', function($http) {
  // constructor for our factory
  var friends = [];
  var friend = {};
  function FriendsFactory(){

    var _this = this;

    this.create = function(newfriend,callback){
      $http.post('/friends', newfriend).then(function(returned_data){
        console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };

    this.update = function(){ // what parameters do we need?
      // Your code here


      $http.put('/friends').then(function(){

      })

    };
    this.index = function(callback){

      //call this method if you want to update or set the friends variable
      $http.get('/friends').then(function(returned_data){
        console.log('calling factory index and grabbing returned_data from factory')
        console.log(returned_data.data);
        friends = returned_data.data;
        callback(friends);
      });
 //Note: this can be shortened to $http.get('/friends').then(callback);
 //But only if you only want to run the callback from the controller.
    };
    this.delete = function(){// what parameters do we need?
        // Your code here
    };
    this.show = function(){// what parameters do we need?
        // Your code here
    };
    // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    this.getFriends = function(callback){
      callback(friends);
    };
    this.getFriend = function(callback){
        callback(friend);
    };
  }
  console.log(new FriendsFactory());
  return new FriendsFactory();
}]);
