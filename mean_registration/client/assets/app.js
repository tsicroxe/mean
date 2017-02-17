console.log('app loaded')

var app = angular.module('app', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'partials/_index.html',
      controller: 'usersController',
      controllerAs: 'UC'
    })
    .when('/login', {
      templateUrl: 'partials/_login.html',
      controller: 'usersController',
      controllerAs: 'UC'
    })
    .when('/register', {
      templateUrl: 'partials/_index.html',
      controller: 'usersController',
      controllerAs: 'UC'
    })
    .when('/main', {
      templateUrl: 'partials/_main.html',
      controller: 'usersController',
      controllerAs: 'UC'
    })

    .otherwise({
      redirectTo: '/'
    })
  }])

function handleErrors(err){
  console.log(err)
}
