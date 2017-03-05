
console.log('usersFactory')
app.factory('usersFactory', ['$http', '$cookies', function($http, $cookies){

  var _this = this;


  // Things stored in these variables not available to client
  var users = []
  var user = {}

  console.log(users)

  function UsersFactory(){
    console.log('future home of the users factory object')


  // this.getUsers = function(callback){
  //   $http.get('/main').then(function(data){
  //     console.log('data from index factory',data.data);
  //     users = data.data;
  //     if (typeof(callback) === 'function'){
  //       callback(friends);
  //     }
  //   });
  // };

  //Verifies this is not a
  // this.verifySession = function(callback){
  //   $http.get('/verifySession')
  //   .then(function(data){
  //     console.log('verify session data', data)
  //     callback(data)
  //   })
  // }

  //Gets users from the server
  this.index = function(callback){
    $http.get('/main')
    .then(function(data){
      console.log('data from index factory',data.data);
      users = data.data.data;
      if (typeof(callback) === 'function'){
        callback(users);
      }
    });
  };

  //Callbacks users stores in the factory
  this.fetchUser = function(callback){
    console.log(user)
    callback(user);
  };
  

  this.fetchUsers = function(callback){
    callback(users);
  };

  this.register = function(registration_form){
    console.log('registering in discussionFactory', registration_form)
    return $http.post('/register', registration_form)
      .then(function(res){ return res.data; })
      .catch(function(err){ return err; })
  }

  this.login = function(login_data){
    console.log('hit factory login')
     return $http.post('/login', login_data)
    .then(function(res){
      user = {id: res.data.userId}
      return res})
    .catch(function(err){return err})
  }

  this.logout = function(){
    return $http.delete('/logout' + $cookies.get('userId'));
  }

}
  // console.log(UsersFactory)
  return new UsersFactory();
}])
