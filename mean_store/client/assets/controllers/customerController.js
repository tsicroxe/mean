console.log('customerController')

app.controller('customerController', ['$scope', 'storeFactory', function($scope, storeFactory){

    $scope.customers = [];
    $scope.errors = {};

    getCustomers()


    function getCustomers(){
        storeFactory.getCustomers()
        .then(function(data){
            $scope.customers = data.customers
            console.log($scope.customers)
        })
    }

    $scope.createCustomer = function(){
        console.log('customerscontroller creating customer')
        $scope.errors = {}
        storeFactory.createCustomer($scope.newCustomer)
        .then(function(data){
            $scope.customers.push(data.newCustomer)
            $scope.newCustomer = {};

        })
        .then(getCustomers())
        .catch(function(err){
            if(err){
                console.log('caught an error', err)
                $scope.errors = err.data
                console.log($scope.errors)
                $scope.newCustomer = {};
            }
        })
    }

    $scope.deleteCustomer = function(customerID){
        console.log('custoemrsController deleting customer')
        console.log(customerID)
        storeFactory.deleteCustomer(customerID)
        .then(getCustomers())
    }



}])
