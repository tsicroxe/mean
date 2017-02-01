angular.module('app', ['ngRoute'])
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
      templateUrl: 'partials/_associations.html',
      controller: 'assocationsController',
      controllerAs: 'AC'
    })
    .otherwise({
      redirectTo: '/'
    })
  }])
  .factory('playerFactory', ['$http', function($http){
    const factory = {};

    factory.players = [];

    factory.getPlayers = function(){
      $http.get('/players')
        .then(function(response){
          if(response.data.success){
            response.data.players.forEach(function(player){
              let index = factory.players.indexOf(player);

              if (!~index){
                factory.players.push(player);
              }
            })
          }
        })
        .catch(handleErrors);
    };

    factory.addPlayer = function(player, callback){
      $http.post('/players', player)
      .then(callback)
      .catch(handleErrors);
    }

    return factory;
  }])

  .controller('playersController', ['$scope', '$route', 'playerFactory', function($scope, $route, pf){
    $scope.players = [];
    $scope.getPlayers = function(){
      console.log("reached playerscontroller")
      pf.getPlayers(function(players){
        $scope.players = players.data;
      });
    };

    $scope.addPlayer = function(){
      pf.addPlayer($scope.player, function(res){
        if(response.data.success){
          let player = response.data.player;
          $scope.players.push(player);
        }
      });
      $scope.player = {};
    };
  }])

function handleErrors(err){
  console.log(err)
}
