var Product = require('../models/product');
// var Order = require('../models/order');

module.exports = {
  index: function(req, res){
    Product.find({}, function(err, products){
    	if (err){
    		res.json(err);
    	}
    	else {
    		res.json({success: true, products});
    	}
    });
  },

  create: function(req, res){
    Product.create(req.body, function(err, newProduct){
      if (err){
        console.log(err)
        if (err.name === 'MongoError' && err.code === 11000) {
          // Duplicate username, though research 'mongoose-unique-validator'
          return res.status(500).send({ success: false, message: 'Product already exists!'});
          }
        res.json(err);
      }
      else{
        console.log(newProduct)
        res.json({success: true, newProduct})
      }
    })
  },

  delete: function(req, res){
    console.log(req.params.id)
    Product.remove({_id: req.params.id}, function(err, data){
      if (err){
        console.log('error in deleting', err)
        res.json(err);
      }
      else{
        console.log('successfully deleted')
        res.json({success: true})
      }
    })
  }

}
