var Category = require('../models/category');
// var Order = require('../models/order');

module.exports = {

  // index: function(req, res){
  //   console.log('running index')
  //   User.find({}, function(err, users){
  //
  //   	if (err){
  //   		res.json(err);
  //   	}
  //   	else {
  //   		res.json({success: true, users});
  //   	}
  //   });
  // },

  getCategories: function(req, res){
    console.log('running index for categories')
    Category.find({}, function(err, categories){

    	if (err){
    		res.json(err);
    	}
    	else {
    		res.json({success: true, categories});
    	}
    });
  },

  createCategory: function(req, res){
    console.log('registering req.body', req.body)
    Category.create(req.body, function(err, newCategory){
      if (err){
        console.log(err)
        if (err.name === 'MongoError' && err.code === 11000) {
          // Duplicate username, though research 'mongoose-unique-validator'
          return res.status(500).send({ success: false, message: 'Category already exists!'});
          }
        res.json(err);
      }
      else{
        console.log('new category created > ', newCategory)
        res.json({success: true, category: newCategory})
      }
    })
  },

  login: function(req, res){
        User.findOne({name: req.body.name})
        .then(function(user){
              return user.verifyPassword(req.body.password)
              .then(function(){
                   console.log('successfully logged in, user', user)
                   console.log(user._id);
                    req.session.user_id = user._id;
                    req.session.name = user.name;
                    console.log(req.session)
                    res.json({success: true, user_id: user._id})

              })
              .catch(function(err){
                console.log('.catch and returning >', err)
                res.status(500).json(err)
              })

        })
  },



}
