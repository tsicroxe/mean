var Customer = require('../models/customer');
var Order = require('../models/order');
var Product = require('../models/product')

module.exports = {

  index: function(req, res){
    Order.find({})
    .populate('_customer _product')
    .exec(function(err, orders){
    	if (err){
    		res.json(false);
    	}
    	else {
    		res.json(orders);
    	}
    });
  },

  // index: function(req, res){
  //   Customer.find({}, function(err, customers){
  //   	if (err){
  //   		res.json(err);
  //   	}
  //   	else {
  //   		res.json({success: true, customers});
  //   	}
  //   });
  // },

  create: function(req, res){
    var quantity = req.body.quantity,
        _customer = req.params.customerId,
        _product = req.params.productId;

    // Make sure order quantity is at least 1
    if (quantity < 1) { return res.json(false); }

    // Only create an order if the quantity requested is available.
    console.log('checking to see if quantity available')
    Product.isQuantityAvailable(_product, quantity, function(result, product){
      // If there are enough products available, decrementQuantity
      if (result) {
        console.log('decemrenting quantity')
        product.decrementQuantity(quantity, function(err){
          if(err){ return res.json(err); }
          // If here, product quantity has been decremented, can add order
          console.log(`creating order. Quantity: ${quantity}, _customer: ${_customer}, _product: ${_product}`)
          Order.create({ quantity: quantity, _customer: _customer, _product: _product}, function(err){
            if (err) {
              console.log('error', err)
              return res.json(err); }

            return res.json(true)
          })
        })
      } else {
        return res.json(false);
      }
    })
  },

  delete: function(req, res){
    console.log(req.params.id)
    Customer.remove({_id: req.params.id}, function(err, data){
      if (err){
        console.log('error', err)
        res.json(err);
      }
      else{
        console.log('success', data)
        res.json({success: true})
      }
    })
  },

  recent: function(req, res){
    Order.find({})
      .sort('-created_at')
      .limit(3)
      .populate('_customer _product')
      .exec(function(err, results){
        res.json(results)
      })
  }

}
