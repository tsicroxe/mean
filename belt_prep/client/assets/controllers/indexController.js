console.log('running users controller')

app.controller('indexController', ['$scope', '$location', '$cookies', 'usersFactory', function($scope, $location, $cookies,  uf){

verifySession()

  $scope.errors = {};
  $scope.users = []
  $scope.success = {}


  // $scope.checkCookie = function(){
  //   console.log('checking cookie')
  //   console.log($cookies.get('userId'))
  //   console.log($cookies.get('first_name'))
  //   console.log($cookies.get('expiration'))
  // }

  function verifySession(){
    if($cookies.get('userId')){
      $location.path('/dashboard')
    }
  }




  $scope.register = function(registration_form){
      reset()
      console.log('registering in indexController', registration_form)
      uf.register(registration_form)
      .then(function(data){
        console.log('DATA', data)
        if(data.success === true){
          $scope.success = {message: data.message}
          console.log('scope.success', $scope.success)
        }
        else{
          $scope.errors = data.data.errors
        }

      })

  }

  $scope.login = function(login_form){
    reset()
    console.log('ic.login', login_form)
    uf.login(login_form)
    .then(function(data){
      console.log(data)
      if(data.data.success === true){
        $location.path('/dashboard')
      }
      else{
        console.log('well your messed')
        $scope.errors = data.data.errors
      }
    })
  }


  function reset(){
    $scope.errors = {}
    $scope.login_data
    $scope.registration_data = {}
    $scope.success = {}
  }

  // index()


}])
