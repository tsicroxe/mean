// Create a module
var app = angular.module('app', []);
// Create a factory (attached to this module)
app.factory('ProductFactory', function ($http){
    // The factory is nothing more than a function that returns an object
    var products = [
        {name: 'Keyboard', price: 149.99},
        {name: 'Mouse', price: 59.99},
        {name: 'Basketball', price: 59.99}];

    var factory = {};
    // Add a getStudents key to the factory object with a value of a function.
    factory.getProducts = function (callback){
        // Pass the students to a callback to be used by whoever calls the method
        callback(products);
    }

    factory.addProduct = function (callback){
        console.log("made it to factory adding of product!")
        callback(products.push(callback))
    }

    factory.printProducts = function(callback){
        console.log(products)
    }
    // Most important step: return the object so it can be used by the rest of our angular code
    return factory;
});


// Create a controller (attached to this module), and inject the studentFactory in it.
app.controller('ProductController', ['$scope', 'ProductFactory', function ($scope, ProductFactory){
    console.log(ProductFactory)
    //  initialize an empty array so $scope.students maintains a consistent data type
    $scope.products = [];

    $scope.addProduct = function(product){
        console.log("Adding a product now")
        ProductFactory.addProduct($scope.products, function(res){
            if(response.data.success){
                console.log("Successfully added")
                $scope.products.push(product);
            }
        })
        //THIS IS WHERE YOU ADD A PRODUCT TO THE FACTORY... somehow

    }
    console.log($scope.products);
    // run the getStudents method and set $scope data in the callback
    ProductFactory.getProducts(function (data){
        $scope.products = data;
    });



}])
