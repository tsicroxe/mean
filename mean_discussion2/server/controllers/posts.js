var Post = require('../models/post');
// var Order = require('../models/order');

module.exports = {

  index: function(req, res){
    if (req.session && req.session.user) {
    Post.find({})
    .populate('user topic category comments')
    .exec(function(err, posts){
    	if (err){
    		res.json(false);
    	}
    	else {
    		res.json({success: true, posts});
    	}
    });
  }
    else{
      console.log('no req.session, returning with json success as false')
      res.json({success: false, message: 'No req.session, redirecting to dashboard'})
    }
  },

  // index: function(req, res){
  //   console.log('running index')
  //   if (req.session && req.session.user) {
  //     console.log('req.sesion found')
  //     User.find({}, function(err, users){
  //
  //     	if (err){
  //     		res.json(err);
  //     	}
  //     	else {
  //     		res.json({success: true, users});
  //     	}
  //     });
  //   }
  //   else{
  //     console.log('no req.session, returning with json success as false')
  //     res.json({success: false, message: 'No req.session, redirecting to dashboard'})
  //   }
  // },

  createPost: function(req, res){
    console.log('registering req.body', req.body)
    Post.create(req.body, function(err, newPost){
      if (err){
        console.log(err)
        if (err.name === 'MongoError' && err.code === 11000) {
          // Duplicate username, though research 'mongoose-unique-validator'
          return res.status(500).send({ success: false, message: 'Post already exists!'});
          }
        res.json(err);
      }
      else{
        console.log('new post created > ', newPost)
        res.json({success: true, post: newPost})
      }
    })
  },

}
