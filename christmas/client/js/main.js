var app = angular.module('app', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'partials/_index.html',
      controller: 'MainController',
      controllerAs: 'MC'
    })
    .when('/challenge1', {
      templateUrl: 'partials/_challenge1.html',
      controller: 'MainController',
      controllerAs: 'MC'
    })
    .when('/challenge2', {
      templateUrl: 'partials/_challenge2.html',
      controller: 'MainController',
      controllerAs: 'MC'
    })
    .when('/challenge3', {
      templateUrl: 'partials/_challenge3.html',
      controller: 'MainController',
      controllerAs: 'MC'
    })
    .otherwise({
      redirectTo: '/'
    })
  }])




function handleErrors(err){
  console.log(err)
}
