console.log('reading product model');
var mongoose = require('mongoose');


var ProductSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Please enter a product name'],
        unique: [true, 'Item already exists']
    },
    url: {type: String},
    description: {type: String},
    quantity: {type: Number, default: 100}

},
    {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }

});

ProductSchema.statics.isQuantityAvailable = function(productId, quantityRequested, cb) {
  console.log('productId', productId)
  console.log('quanityrequest,', quantityRequested)
  this.findById({_id: productId}, function(err, product){
    console.log('err > ', err)
    console.log('product', product)
    if (err) { return cb(err); }
    var result = (product.quantity >= quantityRequested);
    return cb(result, product);
  })
};

ProductSchema.methods.decrementQuantity = function(quantity, cb) {
  this.quantity -= quantity;
  this.save(function(err){
    cb(err);
  });
};



module.exports = mongoose.model('Product', ProductSchema);
