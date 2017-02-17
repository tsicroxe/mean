var Customer = require('../models/customer');
// var Order = require('../models/order');

module.exports = {
  index: function(req, res){
    Customer.find({}, function(err, customers){
    	if (err){
    		res.json(err);
    	}
    	else {
    		res.json({success: true, customers});
    	}
    });
  },

  create: function(req, res){
    Customer.create(req.body, function(err, newCustomer){
      if (err){
        console.log(err)
        if (err.name === 'MongoError' && err.code === 11000) {
          // Duplicate username, though research 'mongoose-unique-validator'
          return res.status(500).send({ success: false, message: 'User already exists!'});
          }
        res.json(err);
      }
      else{
        console.log(newCustomer)
        res.json({success: true, newCustomer})
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
  Customer.find({})
    .sort('-created_at')
    .limit(3)
    .exec(function(err, results){
      res.json(results)
    })
}

}
