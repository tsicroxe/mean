var app = angular.module('app', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/new', {
      templateUrl: 'partials/_new.html',
      controller: 'newController',
      controllerAs: 'NC'
    })
    .when('/edit', {
      templateUrl: 'partials/_edit.html',
      controller: 'editController',
      controllerAs: 'EC'
    })
    .otherwise({
      redirectTo: '/'
    })
  }])
  .controller('FriendController', ['$scope', '$route',  function($scope, $route){

    $scope.friends = [];

      $scope.friend = {};

      $scope.index = function(){
        console.log("reached FriendController")

      };
      console.log('why')
  }])

function handleErrors(err){
  console.log(err)
}
