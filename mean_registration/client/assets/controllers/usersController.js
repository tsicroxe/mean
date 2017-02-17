console.log('running users controller')

app.controller('usersController', ['$scope', 'usersFactory', function($scope, usersFactory){

  $scope.errors = {};
  $scope.user = {}
  $scope.users = []


  // var index = function(){
  //   console.log('At controller calling usersFactory.index')
  //   usersFactory.index(function(users){
  //     console.log(users)
  //     $scope.users = users.data
  //     console.log($scope.users)
  //     console.log($scope.user)
  //   })
  // }
  // index()


  $scope.register = function(form_data){
    console.log('Registering form data', form_data)
    usersFactory.register(form_data, function(data){
      // What do I do?
      if(data.data.success === true){
        console.log(data)
      }
      else{
        $scope.errors = data.data.errors;
        console.log($scope.errors)
      }
    })

  };


  $scope.login = function(login_data){
    console.log("controller login", login_data)
    $scope.errors = []
    usersFactory.login(login_data, function(data){
      console.log(data)
      if(data.data.success === true){
        $scope.user = data.data.userID
        console.log('$scope.user =  ', $scope.user)
      }
      else{
        $scope.errors = data.data
        console.log('scope.errors, ', $scope.errors)
      }
    })
  }
}])
