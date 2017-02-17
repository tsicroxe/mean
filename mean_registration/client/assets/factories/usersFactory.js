
console.log('usersFactory')
app.factory('usersFactory', ['$http', function($http){

  var _this = this;

  var users = [];
  var errors = {}

  function UsersFactory(){
    console.log('future home of the users factory object')

  this.index = function(callback){
    return $http.get('/main')
    .then(callback)
    .catch(function(err){
      console.log('we caught an error > ', err);
      errors = err;
      console.log('consolelogging errors > ', errors)
    })
  }

  this.register = function(form_data, callback){
    console.log('hit factory register')
    $http.post('/register', form_data)
    .then(callback)
    .catch(function(err){
      console.log(err);
      callback(err)
    })
  };

  this.login = function(login_data, callback){
    console.log('hit factory login')
     $http.post('/login', login_data)
    .then(console.log('returned callback > ', callback))
    //Add users at this point to factory object
    .then(callback)
    .catch(function(err){
      callback(err)
    })
  }

}

  return new UsersFactory();
}])
