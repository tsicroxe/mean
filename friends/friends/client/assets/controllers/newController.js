app.controller('newController', ['$scope','friendsFactory', function($scope, friendsFactory) {
/*
  THIS INDEX METHOD ACCESSES THE FRIENDS FACTORY AND RUNS THE FRIENDS INDEX.
  WE MIGHT RE USE INDEX A FEW TIMES, SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.
*/

   $scope.friends = [];

   var index = function(){
                        friendsFactory.index(function(returnedData){
                          $scope.friends = returnedData;
                        });
                        console.log('running NCcontrollerindex')
            };
   index();



   $scope.create = function(){
      console.log('Running create function')
      var friend = {name: $scope.name, favoriteLanguage: $scope.favoriteLanguage};
      friendsFactory.create(friend)
      $scope.name=''
      $scope.favoriteLanguage=''
      index();

   }
/*
  OUR $scope.create function goes here <-- $scope because we need to access this method
  with ng-submit or ng-click (from the form in the previous assignment).
  Want to all of the friends when we get back?  We can re-run index.
*/
}]);
