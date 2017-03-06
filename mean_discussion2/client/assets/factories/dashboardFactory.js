
console.log('dashboardFactory')
app.factory('dashboardFactory', ['$http', '$cookies', function($http, $cookies){

  var _this = this;


  // Things stored in these variables not available to client
  var categories = []
  var topics = []
  var topic = {}
  var posts = []

  function DashboardFactory(){




  //Begin Categories
  this.getCategories = function(){
  return $http.get('/dashboard/categories')
    .then(function(res){
      categories = res.data.categories
      return res.data; })
}

  this.createCategory = function(category){
    console.log('creating category', category)
    return $http.post('/dashboard/category', category)
    .then(function(res){
      console.log(res.data)
      categories.push(res.data.category)
      return res.data
    })
  }

  this.fetchCategories = function(callback){
    callback(categories);
  };
  //End Categories

  //Begin Topics


  this.getTopic = function(id, callback){
    console.log('getting topics in factory', id)
    topic = {id: id}
    return $http.get('/dashboard/topic/'+id)
    .then(callback)
    .catch(function(err){
      console.log('we caught an error > ', err);
      errors = err;
      console.log('consolelogging errors > ', errors)
    })
  }



  this.getTopics = function(){
  return $http.get('/dashboard/topics')
    .then(function(res){
      topics = res.data
      return res.data; })
}

  this.createTopic = function(topic){
    console.log('creating topic', topic)
    return $http.post('/dashboard/topic', topic)
    .then(function(res){
      topics.push(res.data.topic)
      console.log(res)
      return res.data
    })
  }

  this.fetchTopics = function(callback){
    callback(topics);
  };

  this.fetchTopic = function(callback){
    console.log(topic)
    callback(topic);
  };


  //End Topics

  //Begin POSts
  this.getPosts = function(){
  return $http.get('/topic/posts')
    .then(function(res){
      temp_posts = res.data.posts
      for(var i = 0; i < temp_posts.length; i++){
        if(topic.id === temp_posts[i]._id)
        posts.push(temp_posts[i])
        console.log('temp posts', i , temp_posts[i]._id)
      }
      console.log('all posts', posts)
      console.log('resresresresresresresres', res)
      return res.data;
    })
}

  this.createPost = function(post){
    console.log('creating topic', post)
    return $http.post('/topic/post', post)
    .then(function(res){
      console.log('res', res)
      posts.push(res.data.post)
      console.log('var posts', posts)
      return res.data
    })
  }

  this.createComment = function(comment, post){
    console.log('createcomment', comment, post)
    return $http.post('/topic/comment', comment)
    .then(function(res){
      console.log('res.data.comment.id', res.data.comment._id)
      comment = res.data.comment._id.toString()
      post = {post}
      console.log(post)
      return $http.post('/topic/post/'+comment, post)
      .then(function(res){
        console.log(res)
      })

    })
  }

  this.fetchPosts = function(callback){
    callback(topics);
  };
  //End Categories




}
  // console.log(UsersFactory)
  return new DashboardFactory();
}])
