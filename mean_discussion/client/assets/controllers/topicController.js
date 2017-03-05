console.log('topicController')


app.controller('topicController', ['$scope', '$location', '$cookies', 'discussionFactory', function($scope, $location, $cookie, df){


  if (df.topic){
    console.log('DF TOPIC important', df.topic)
    $scope.topic = df.topic
  }
  else{
    $location.path('/dashboard')

  }
  $scope.posts = []
  $scope.comments = []

  getPosts()
  getComments()

  function getPosts(){
    console.log('getting psots')
    df.getPosts()
    .then(function(data){
      for(var i = 0; i<data.data.posts.length; i++){
        console.log(data.data.posts[i]._id)
        post = data.data.posts[i].topic_id
        if($scope.topic._id == post._id){
          $scope.posts.push(data.data.posts[i])
        }
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

  console.log("DSLKFJLAJFOAKDJKOSDJFLKDJSF")

  $scope.createPost = function(post){
    post = {
      name: post.name,
      topic_id: $scope.topic._id,
      user_id: $cookie.get('id'),
      category: $scope.topic.categoryId._id,
    }
    console.log(post)
      df.createPost(post)
      .then(function(data){
        console.log('topicController: returned data', data)
        console.log('scope.posts', $scope.posts)
        $scope.posts = []
        getPosts()
        $scope.post = {}
      })
  }

  $scope.createComment = function(comment, postId){

    comment = {
      name: $cookie.get('name'),
      reply: comment.name,
      userId: $cookie.get('id'),
      postId: postId
    }
    console.log(comment)
    df.createComment(comment)
    .then(function(data){
      // console.log('topicController: returned data', data)
      // console.log('scope.comments', $scope.comments)
      $scope.posts = []
      getPosts()
      $scope.comment = {}
    })
  }



}])
