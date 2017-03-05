console.log('app loaded')

var app = angular.module('app', ['ngRoute', 'ngCookies'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'partials/_index.ejs',
      controller: 'indexController',
      controllerAs: 'ic'
    })
    .when('/dashboard', {
      templateUrl: 'partials/_dashboard.ejs',
      controller: 'dashboardController',
      controllerAs: 'oc'
    })
    .when('/topic/:id', {
      templateUrl: 'partials/_topic.ejs',
      controller: 'topicController',
      controllerAs: 'tc'
    })

    // .when('/users', {
    //   templateUrl: 'partials/_index.html',
    //   controller: 'indexController',
    //   controllerAs: 'ic'
    // })
    // .when('/customers', {
    //   templateUrl: 'partials/_customers.html',
    //   controller: 'customerController',
    //   controllerAs: 'cc'
    // })
    .otherwise({
      redirectTo: '/'
    })
  }])

function handleErrors(err){
  console.log(err)
}
