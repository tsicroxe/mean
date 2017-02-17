console.log('indexController')


app.controller('indexController', ['$scope', 'storeFactory', function($scope, storeFactory){

    $scope.products = [];
    $scope.recentOrders = [];
    $scope.recentCustomers = [];
    // $scope.created_at = [];

    storeFactory.getProducts()
      .then( function(data){
        $scope.products = data.products;
        // console.log('scopeproducts., ', $scope.products);
      });

    storeFactory.getRecentOrders()
      .then( function(data){
        $scope.recentOrders = data.map( function(order){
          order.created_at = new Date(order.created_at);
        //   console.log('order.createdat', order.created_at);
          return order;
        })
      })

    storeFactory.getRecentCustomers()
      .then( function(data){
        $scope.recentCustomers = data.map( function(customer){
            // console.log('customer.createdat', customer.created_at);
          customer.created_at = new Date(customer.created_at);
        //   console.log('customer.createdat', customer.created_at);

          return customer;
        })
      })


}])
