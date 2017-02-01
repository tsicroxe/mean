console.log('users.js')
var User = require('mongoose').model('User');

module.exports = {
  index: function(req, res){
    User.find({})
    .populate('user')
    .exec(function(err, users){
      if(err){
        console.log(err)
      } else {
        res.json(users)
      }
    })
  },
  create: function(req, res){
    User.create(req.body, function(err, user){
      if(err){
        console.log(err)
        res.status(500);
        res.json(err);
      } else {
        res.json({success: true, user })
      }
    })
  },
  somethingelse: function(req, res){

  }

}
