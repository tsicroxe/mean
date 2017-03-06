
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

      verifySession: function(req, res){
        if(req.session && req.session.user){
             res.json({success: true})
      }
       else{
             res.json({success: false})
      }
      },

      index: function(req, res){
            User.find({})
            .then(function(data){
                  console.log(data)
                  res.json({success: true, data});
            })
            .catch(function(err){
                  console.log(err);
                  res.status(500).json({success: false, error: 'Unable to retrieve users'});
            })
      },

      register: function(req, res){
            req.body.isAdmin = false;
            User.create(req.body)
            .then(function(user){
                  console.log(user);
                  req.session.userID = user._id;
                  console.log('user succesfully created', user._id)
                  res.json({success: true, message: 'Registration successful. Please login now.'})
            })
            .catch(function(err){
                  console.log('err >>>>>>> ', err);
                  err = err.errors
                  err = {success: false, errors: err}

                  res.status(500).json(err);
            })
      },

      login: function(req, res){
            User.findOne({user_name: req.body.user_name})
            .then(function(user){
                  return user.verifyPassword(req.body.password)
                  .then(function(){
                        req.session.user = user;
                        req.session.user.password = ''

                        userId = user._id.toString()

                        res.cookie('userId', userId)
                        res.cookie('first_name', user.first_name)
                        res.cookie('expiration', Date.now() + 86400 * 1000 )
                        res.json({success: true, userId : user._id})

                  })
                  .catch(function(err){
                        console.log('FIRST >', err)
                        errors = {login: {message: "Incorrect password. Please re-enter your password"}}
                        res.status(500).json({success: false, errors})
                  })
            })
            .catch(function(err){
                  console.log('SECOND >', err)
                        errors = {exist: {message: 'Username does not exist'}}
                        res.status(500).json({success: false, errors})

            })
      },



      logout: function(req, res){
            console.log('logging out')
            req.session.destroy()
            res.clearCookie('userId')
            res.clearCookie('first_name')
            res.clearCookie('expiration')

            res.json({success: true})
      },

      delete: function(req, res){

      },


}




module.exports = usersController; // what does this export?
