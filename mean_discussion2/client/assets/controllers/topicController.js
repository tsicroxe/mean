console.log('topicController')


app.controller('topicController', ['$scope', '$location', '$cookies', '$routeParams', 'usersFactory', 'dashboardFactory', function($scope, $location, $cookies, $routeParams, uf, df){

verifySession()

var id = $routeParams.id




console.log('id is set correctly', id)
console.log('userid cookie', $cookies.get('userId'))
console.log('uf.user', uf.user)


  uf.fetchUser(function(data) {
		$scope.name = data;
	})

function getTopic(id){
  console.log('getting specific topic', id)
  df.getTopic(id, function(data){
    console.log(data)
    $scope.topic = data.data.topic
    console.log("THIS IS IT', $scope.topic", $scope.topic)
  })
}
// fetchTopic()

console.log('routeparams id', id)

  function verifySession(){
    if($cookies.get('userId')){
      console.log('session active')
    }
    else{
      $location.path('/')
    }
  }

  // function getTopic(id){
  //   console.log('getting topic', id)
  //   df.getTopic(function(data){
  //     $scope.topic = data;
  //   })
  // }


  function fetchTopic(){
    df.fetchTopic(function(data){
      console.log(data)
      $scope.topic = data
    })
  }


  $scope.posts = []
  $scope.comments = []
  $scope.topic = {}
  getTopic(id)
  getPosts()
  fetchTopic()
  // getComments()


  function getPosts(){
    console.log('getting psots')
    df.getPosts()
    .then(function(data){
      // for(var i = 0; i<data.data.posts.length; i++){
      //   console.log(data.data.posts[i]._id)
      //   post = data.data.posts[i].topic_id
      //   if($scope.topic._id == post._id){
      //     $scope.posts.push(data.data.posts[i])
      //   }
      // }
      $scope.posts = data.posts
      console.log('scope.posts', $scope.posts)
    })
  }

  function getComments(){
    console.log('getting comments')
    // df.getComments()
    // .then(function(data){
    //   $scope.comments = data.data.comments
    //   console.log('scope.comments', $scope.comments)
    // })
  }

  console.log("DSLKFJLAJFOAKDJKOSDJFLKDJSF")

  $scope.createPost = function(post){
    console.log(post)
    post = {
      post: post.post,
      topic: $scope.topic._id,
      user: $cookies.get('userId'),
      category: $scope.topic.category._id,
    }
    console.log(post)
      df.createPost(post)
      .then(function(data){
        console.log('topicController: returned data', data)
        console.log('scope.posts', $scope.posts)
        getPosts()
        // $scope.post = {}
      })
  }

  $scope.createComment = function(comment, post){

    comment = {
      name: $cookies.get('first_name'),
      comment: comment.comment,
      user: $cookies.get('userId'),
      post: post
    }
    console.log(comment)
    df.createComment(comment, post)
    .then(function(data){
      // console.log('topicController: returned data', data)
      // console.log('scope.comments', $scope.comments)
      // $scope.posts = []
      // getPosts()
      // $scope.comment = {}
      console.log(data)
    })
  }



}])
