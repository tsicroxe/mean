console.log('running users controller')

app.controller('dashboardController', ['$scope', '$location', '$cookies', 'usersFactory', 'dashboardFactory', function($scope, $location, $cookies, uf, df){
  verifySession()


  $scope.user = {
      name: $cookies.get('first_name'),
      id: $cookies.get('userId')
  }

  $scope.errors = {};
  $scope.users = []
  $scope.categories = []
  $scope.topics = []



  getCategories()
  getTopics()

  //Begin Categories
  function getCategories (){
    df.getCategories()
    .then(function(data){
      console.log('category data', data.categories)
      $scope.categories = data.categories
    })
  }

  function fetchCategories(){
    df.fetchCategories(function(data){
      $scope.categories = data
    })
  }

  $scope.createCategory = function(category){
    df.createCategory(category)
    .then(function(data){
      console.log('returned data', data)
    })
    fetchCategories()
    $scope.category = {}
  }
  //End Categories


  //Begin Topics
  function getTopics (){
    df.getTopics()
    .then(function(data){
      console.log('topic data', data)
      $scope.topics = data
    })
  }

  function fetchTopics(){
    df.fetchTopics(function(data){
      $scope.topics = data
    })
  }

  $scope.createTopic = function(topic){
    topic.category= topic.category._id

    uf.fetchUser(function(data){
        topic.user = data.id
    })
    console.log(topic)

    df.createTopic(topic)
    .then(function(data){
      console.log('returned data', data)
    })
    getTopics()
    $scope.topic = {}
  }
  //End Categories



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
