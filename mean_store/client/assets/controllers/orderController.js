console.log('orderController')

app.controller('orderController', ['$scope', 'storeFactory', function($scope, storeFactory){

  $scope.errors = {}
  $scope.customers = [];
   $scope.products = [];
   $scope.orders = [];
   getOrders();

   storeFactory.getCustomers()
   .then( function(data){
     if(data.success === true){

       $scope.customers = data.customers;
     }
   })

   storeFactory.getProducts()
   .then( function(data){
     if(data.success === true){

       $scope.products = data.products;
     }
   })


   function getOrders(){
     storeFactory.getOrders()
     .then( function(data){
       $scope.orders = data;
       console.log($scope.orders);
     })
   }


   $scope.createOrder = function(){
     $scope.errors = {}
     console.log('orderController creating order', $scope.newOrder)
     storeFactory.createOrder($scope.newOrder)
     .then(function(){
      //  $scope.newOrder = {};
       getOrders()
     })
     .then( getOrders )
     .catch( function(err){
       console.log('error', err);
       console.log(typeof(err))
       $scope.errors.message = err

     })
      $scope.newOrder = {}
   }


}])
