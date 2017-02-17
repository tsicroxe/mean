var customers = require('./../controllers/customers.js');
var products = require('./../controllers/products.js');
var orders = require('./../controllers/orders.js');



module.exports = function(app){
	app.get('/customers', customers.index)
	app.post('/customers', customers.create)
	app.delete('/customers/:id', customers.delete)
	app.get('/customers/recent', customers.recent)
	// app.post('/login', users.login);

	app.get('/products', products.index)
	app.post('/products', products.create)
	app.delete('/products/:id', products.delete)

	app.get('/orders', orders.index)
	app.post('/orders/:productId/:customerId', orders.create)
	app.get('/orders/recent', orders.recent)

}
