var User = require('../models/user');
// var Order = require('../models/order');


module.exports = {

  index: function(req, res){
    console.log('running index')
    if (req.session && req.session.user) {
      console.log('req.sesion found')
      User.find({}, function(err, users){

      	if (err){
      		res.json(err);
      	}
      	else {
      		res.json({success: true, users});
      	}
      });
    }
    else{
      console.log('no req.session, returning with json success as false')
      res.json({success: false, message: 'No req.session, redirecting to dashboard'})
    }
  },

  register: function(req, res){
    console.log('registering req.body', req.body)
    User.create(req.body, function(err, newUser){
      if (err){
        console.log(err)
        if (err.name === 'MongoError' && err.code === 11000) {
          // Duplicate username, though research 'mongoose-unique-validator'
          return res.status(500).send({ success: false, message: 'User already exists!'});
          }
        res.json(err);
      }
      else{
        console.log('new user created > ', newUser)

        // req.session.user = newUser
        // user = req.session.user
        // console.log(req.session)
        res.json({success: true, newUser})
      }
    })
  },

  login: function(req, res){
        User.findOne({name: req.body.name})
        .then(function(user){
              return user.verifyPassword(req.body.password)
              .then(function(){
                   console.log('successfully logged in, user', user)
                    console.log(user.password)
                    user.password = ''
                    req.session.user = user
                    // delete req.session.user.password
                    // console.log(req.session)
                    res.json({success: true, user})

              })
              .catch(function(err){
                console.log('.catch and returning >', err)
                res.status(500).json(err)
              })

        })
  },


//   delete: function(req, res){
//     console.log(req.params.id)
//     Customer.remove({_id: req.params.id}, function(err, data){
//       if (err){
//         console.log('error', err)
//         res.json(err);
//       }
//       else{
//         console.log('success', data)
//         res.json({success: true})
//       }
//     })
//   },
//
//   recent: function(req, res){
//   Customer.find({})
//     .sort('-created_at')
//     .limit(3)
//     .exec(function(err, results){
//       res.json(results)
//     })
// }

}
