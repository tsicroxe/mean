console.log('productController')

app.controller('productController', ['$scope', 'storeFactory', function($scope, storeFactory){

  $scope.products = [];

  getProducts()

  function getProducts(){
    console.log("getting products")
      storeFactory.getProducts()
      .then(function(data){
          $scope.products = data.products
          console.log($scope.products)
      })
  }

  $scope.createProduct = function(){
    console.log('creatting products')
    storeFactory.createProduct($scope.newProduct)
    .then(function(data){
      console.log("new product being added", data.newProduct)
      $scope.products.push(data.newProduct)
      $scope.newProduct = {};
      getProducts()
    })
  }

  $scope.deleteProduct = function(id){
      console.log('productsController deleting product', id)
      storeFactory.deleteProduct(id)
      .then(getProducts())
  }

}])
