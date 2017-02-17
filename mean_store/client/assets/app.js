console.log('app loaded')

var app = angular.module('app', ['ngRoute', 'angularMoment'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'partials/_index.html',
      controller: 'indexController',
      controllerAs: 'ic'
    })
    .when('/orders', {
      templateUrl: 'partials/_orders.html',
      controller: 'orderController',
      controllerAs: 'oc'
    })
    .when('/products', {
      templateUrl: 'partials/_products.html',
      controller: 'productController',
      controllerAs: 'pc'
    })
    .when('/customers', {
      templateUrl: 'partials/_customers.html',
      controller: 'customerController',
      controllerAs: 'cc'
    })
    .otherwise({
      redirectTo: '/'
    })
  }])

function handleErrors(err){
  console.log(err)
}
