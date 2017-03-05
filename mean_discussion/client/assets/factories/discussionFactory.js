app.factory('discussionFactory', function($http){
console.log('FACTORY CREATED')

  var factory = {};

  var _this = this;

  this.users = [];
  this.topics = []
  this.topic = {}
  this.categories = []
  this.user = {}
  this.posts = []


factory.getUsers = function(callback){
    console.log('getting users in factory')
    return $http.get('/users')
    .then(callback)
    .catch(function(err){
      console.log('we caught an error > ', err);
      errors = err;
      console.log('consolelogging errors > ', errors)
    })
  }

factory.getCategories = function(callback){
  console.log('getting categories in factory')
  return $http.get('/dashboard/categories')
  .then(callback)
  .catch(function(err){
    console.log('we caught an error > ', err);
    errors = err;
    console.log('consolelogging errors > ', errors)
  })
}

factory.getPosts = function(callback){
  console.log('factory: getting posts')
  return $http.get('/topic/posts')
  .then(callback)
  .catch(function(err){
    console.log('we caught an error > ', err);
    errors = err;
    console.log('consolelogging errors > ', errors)
  })
}

factory.getComments = function(callback){
  console.log('factory: getting comments')
  return $http.get('/topic/comments')
  .then(callback)
  .catch(function(err){
    console.log('we caught an error > ', err);
    errors = err;
    console.log('consolelogging errors > ', errors)
  })
}

factory.getTopics = function(callback){
  console.log('getting topics in factory')
  return $http.get('/dashboard/topics')
  .then(callback)
  .catch(function(err){
    console.log('we caught an error > ', err);
    errors = err;
    console.log('consolelogging errors > ', errors)
  })
}

factory.getTopic = function(topic){
  this.topic = topic

}

factory.createTopic = function(newTopic){
  console.log('facotry: creating topic')
  return $http.post('/dashboard/topic', newTopic)
  .then(function(res){return res.data})
}

  factory.register = function(registration_form){
    console.log('registering in discussionFactory', registration_form)
    return $http.post('/register', registration_form)
      .then(function(res){ return res.data; })
  }

  factory.login = function(login_form){
    console.log('logging in discussionFactory', login_form)
    return $http.post('/login', login_form)
      .then(function(res){
        this.user = res.data.user
        console.log('user data in factory', this.user)
        return res.data;
      })
  }

  factory.createCategory = function(category){
    return $http.post('/dashboard', category)
    .then(function(res){
      console.log(res)
      return res.data
    })
  }

  factory.createPost = function(post){
    return $http.post('/topic/:id', post)
    .then(function(res){
      console.log('factory: response from server', res)
      return res.data
    })
  }

  factory.createComment = function(comment){
    return $http.post('/topic/:id/comments', comment)
    .then(function(res){
      console.log('factory: response from server', res)
      return res.data
    })
  }

  // factory.createComment = function(comment){
  //   console.log(comment)
  // }


  console.log(factory)
  return factory;
})
