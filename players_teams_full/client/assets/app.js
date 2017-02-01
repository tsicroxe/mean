var app = angular.module('app', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/players', {
      templateUrl: 'partials/_players.html',
      controller: 'playersController',
      controllerAs: 'PC'
    })
    .when('/teams', {
      templateUrl: 'partials/_teams.html',
      controller: 'teamsController',
      controllerAs: 'TC'
    })
    .when('/associations', {
      templateUrl: '/partials/_associations.html',
      controller: 'associationsController',
      controllerAs: 'AC'
    })
    .otherwise({
      redirectTo: '/'
    })
  }])

function handleErrors(err){
  console.log(err)
}
