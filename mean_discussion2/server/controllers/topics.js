var Topic = require('../models/topic');
// var Order = require('../models/order');

module.exports = {

  index: function(req, res){
    console.log('finding topics')
    Topic.find({})
    .populate('category user ')
    .exec(function(err, topics){
    	if (err){
    		res.json(false);
    	}
    	else {
        console.log(topics)
    		res.json(topics);
    	}
    });
  },

  createTopic: function(req, res){
    console.log('registering req.body', req.body)
    Topic.create(req.body, function(err, newTopic){
      if (err){
        console.log(err)
        if (err.name === 'MongoError' && err.code === 11000) {
          // Duplicate username, though research 'mongoose-unique-validator'
          return res.status(500).send({ success: false, message: 'Topic already exists!'});
          }
        res.json(err);
      }
      else{
        console.log('new topic created > ', newTopic)
        res.json({success: true, topic: newTopic})
      }
    })
  },




}
