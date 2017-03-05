console.log('dashbaordController')


app.controller('dashboardController', ['$scope', '$location', '$cookies', 'discussionFactory', function($scope, $location, $cookie, df){


  $scope.user = {}
  $scope.users = []
  $scope.categories = []
  $scope.topics = []
  $scope.topic = {}
  $scope.user.name = $cookie.get('name')
  $scope.user.id = $cookie.get('id')


  getUsers()
  getCategories()
  getTopics()
  getPosts()
  getComments()



  function fetchUsers(){
    console.log('this is fetch users>', df.users)
  }


  function getUsers(){
    console.log('getting users')
    df.getUsers()
    .then(function(data){
      console.log('retrieved users', data)
      if(data.data.success === false){
        $location.path('/')
      }
      else{
        $scope.users = data.data.users
      }
    })
  }

  function getPosts(){
    console.log('getting psots')
    df.getPosts()
    .then(function(data){
      if(data.data.success === false){
        $location.path('/')
      }
      else{
        $scope.posts = data.data.posts
      }
      console.log('scope.posts', $scope.posts)
    })
  }

  function getComments(){
    console.log('getting comments')
    df.getComments()
    .then(function(data){
      $scope.comments = data.data.comments
      console.log('scope.comments', $scope.comments)
    })
  }

  function getCategories(){
    console.log('getting categories')
    df.getCategories()
    .then(function(data){
      $scope.categories = data.data.categories
      console.log('scope.categories', $scope.categories)
    })
  }

  function getTopics(){
    console.log('getting topics')
    df.getTopics()
    .then(function(data){
      $scope.topics = data.data
      console.log('scope.topics', $scope.topics)
    })
  }


  $scope.createCategory = function(category){
    df.createCategory(category)
    .then(function(data){
      console.log('returned data', data)
    })
    getCategories()
    $scope.category = {}
  }

  $scope.createTopic = function(topic){
    topic.categoryId = topic.categoryId._id
    topic.userId = $scope.user.id
    console.log(topic)
    df.createTopic(topic)
    .then(function(data){
      console.log('created topic data', data)
      getTopics()
      socket.emit('created_topic', data);
    })
    $scope.topic = {}
  }

  $scope.getTopic = function(id){
    console.log('getting specific topic', id)
    $scope.topic = $scope.topics[id]
    console.log($scope.topic, 'THIS IS WHAT WE"RE CHECKING')
    df.getTopic($scope.topic)
    $location.path('/topic/:id')
  }


}])
