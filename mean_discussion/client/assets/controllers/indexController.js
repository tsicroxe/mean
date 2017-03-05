console.log('indexController')


app.controller('indexController', ['$scope', '$location', '$cookies', 'discussionFactory', function($scope, $location, $cookies, df){


  $scope.errors = {}


  // getUsers()
  // getCategories()
  // getTopics()
  // getPosts()
  // getComments()

  function getUsers(){
    console.log('getting users')
    df.getUsers()
    .then(function(data){
      console.log('retrieved users', data)
      if(data.data.success === false){
        $location.path('/')
      }
      else{
        // $scope.users = data.data.users
      }
    })
  }

  function getPosts(){
    console.log('getting psots')
    df.getPosts()
    .then(function(data){
      // $scope.posts = data.data.posts
      console.log('scope.posts', $scope.posts)
    })
  }

  function getComments(){
    console.log('getting comments')
    df.getComments()
    .then(function(data){
      // $scope.comments = data.data.comments
      console.log('scope.comments', $scope.comments)
    })
  }

  function getCategories(){
    console.log('getting categories')
    df.getCategories()
    .then(function(data){
      // $scope.categories = data.data.categories
      console.log('scope.categories', $scope.categories)
    })
  }

  function getTopics(){
    console.log('getting topics')
    df.getTopics()
    .then(function(data){
      // $scope.topics = data.data
      console.log('scope.topics', $scope.topics)
    })
  }


  $scope.register = function(registration_form){
      console.log('registering in indexController', registration_form)
      df.register($scope.registration_form)
      .then(function(data){
          console.log(data.data)
          $scope.registration_form = {}

      })
  }

  $scope.login = function(login_form){
    console.log('logging in indexController', login_form)
    $
      df.login(login_form)
      .then(function(data){
          if(data.success === true){

            $scope.user = data.user
            console.log($scope.user)
            $cookies.put('name', user.name)
            $cookies.put('id', user._id)

            $location.path('/dashboard')
          }
          else{
            console.log('other crap')
          }
          // user.name = session.name
          // user.id = session.user_id
      })
      .catch(function(err){
        console.log('we caught an error > ', err);
        $scope.errors = err.data;

        console.log('consolelogging errors > ',$scope.errors)

      })
      $scope.login_form = {}
  }


}])
