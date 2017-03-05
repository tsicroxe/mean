
console.log('dashboardFactory')
app.factory('dashboardFactory', ['$http', '$cookies', function($http, $cookies){

  var _this = this;


  // Things stored in these variables not available to client
  var categories = []
  var topics = []


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
  //End Categories



}
  // console.log(UsersFactory)
  return new DashboardFactory();
}])
