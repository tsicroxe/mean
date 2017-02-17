
console.log("loading the controller file - users.js");


module.exports = function(){

}
var mongoose = require('mongoose')
var User = mongoose.model('User');


var usersController = {


      // index: function(req, res){
      //       console.log(req.session)
      //
      //       if(req.session.userID){
      //             User.findOne({_id: res.session.userID})
      //             .then(function(user){
      //                   if(user.isAdmin){
      //                         return res.send('hello')
      //                   }
      //             })
      //       }
      //       res.redirect('/')
      // },

      index: function(req, res){
            User.find({})
            .then(function(data){
                  res.json({success: true, data});
            })
      },

      register: function(req, res){

            User.create(req.body)
            .then(function(user){
                  console.log(user);
                  req.session.userID = user._id;
                  res.json(user._id)
                  console.log('user succesfully created', user._id)
            })
            .catch(function(err){
                  console.log(err);
                  err = {success: false, errors: {user_name: {message: "Duplicate email already exists"}}}
                  console.log(err)
                  res.status(500).json(err);
            })
      },
      login: function(req, res){
            User.findOne({user_name: req.body.user_name})
            .then(function(user){
                  return user.verifyPassword(req.body.password)
                  .then(function(){
                       console.log('successfully logged in')
                        req.session.userID = user._id;
                        console.log(req.session.userID)
                        res.json({success: true, userID : user._id})

                  })
            })
            .catch(function(err){
                  console.log('.catch and returning >', err)
                  res.status(500).json(err)
            })
      },

      delete: function(req, res){

      },


}

function handleErrors(err){
      console.log(err);
      res.status(500);
      res.json(err)
}


module.exports = usersController; // what does this export?
