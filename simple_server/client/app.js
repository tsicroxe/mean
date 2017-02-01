angular.module('app', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'partials/_index.html',
      controller: 'UserController',
      controllerAs: 'PC'
    })
    .when('/new', {
      templateUrl: 'partials/_new.html',
      controller: 'UserController',
      controllerAs: 'PC'
    })
    .otherwise({
      redirectTo: '/'
    })
  }])
  // .factory('UserFactory', ['$http', function($http){
  //   const factory = {};
  //
  //   factory.users = [];
  //
  //   factory.getUsers = function(){
  //     $http.get('/users')
  //       .then(function(response){
  //         if(response.data.success){
  //           response.data.players.forEach(function(user){
  //             let index = factory.users.indexOf(user);
  //
  //             if (!~index){
  //               factory.players.push(user);
  //             }
  //           })
  //         }
  //       })
  //       .catch(handleErrors);
  //   };
  .controller('UserController', ['$scope', '$route',  function($scope, $route){
    $scope.players = [];

      $scope.player = {};

      $scope.index = function(){
        console.log("reached userscontroller")
      };

  }])

function handleErrors(err){
  console.log(err)
}
