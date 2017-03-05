var Comment = require('../models/comment');
var Post  = require('../models/post');

module.exports = {

  index: function(req, res){
    Comment.find({})
    .populate('userId postId topicId')
    .exec(function(err, comments){
    	if (err){
    		res.json(false);
    	}
    	else {
    		res.json({success: true, comments});
    	}
    });
  },


  createComment: function(req, res){
    console.log('registering req.body', req.body)
    Comment.create(req.body, function(err, newComment){
      if (err){
        console.log(err)
        if (err.name === 'MongoError' && err.code === 11000) {
          // Duplicate username, though research 'mongoose-unique-validator'
          return res.status(500).send({ success: false, message: 'Comment already exists!'});
          }
        res.json(err);
      }
      else{
        console.log('new comment created > ', newComment)

        Post.findOneAndUpdate({_id: req.body.postId},
          {$push: {comments: newComment}}, function(err, newPost){
            if (err){
              console.log('err', err)
            }
            else{
              console.log('new post', newPost)
            }
          }
        )

        res.json({success: true, comment: newComment})
      }
    })
  },

}
