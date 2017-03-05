console.log('running users controller')

app.controller('dashboardController', ['$scope', '$location', '$cookies', 'usersFactory', function($scope, $location, $cookies, uf){
  verifySession()

  $scope.errors = {};
  $scope.users = []

  uf.index(function(data){
    console.log('data from controller index ', data);
    $scope.users = data;
    console.log('users ', $scope.users);
    fetchUsers()
  });


  // $scope.checkCookie = function(){
  //   console.log('checking cookie')
  //   console.log($cookies.get('userId'))
  //   console.log($cookies.get('first_name'))
  //   console.log($cookies.get('expiration'))
  // }

  function fetchUsers(){
    uf.fetchUsers(function(data){
      $scope.users = data
    })
  }

  $scope.logout = function(){
    console.log('logging out')
    uf.logout()
    .then($location.path('/'))
  }

  // uf.verifySession(function(data){
  //   console.log('data from controller index ', data);
  //   if(data.data.success === false){
  //     console.log($cookies.get('userId'))
  //     $location.path('/')
  //   }
  //   // $scope.users = data;
  // });

  function verifySession(){
    if($cookies.get('userId')){
      console.log('session active')
    }
    else{
      $location.path('/')
    }
  }

}])
