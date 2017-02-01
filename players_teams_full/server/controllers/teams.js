
var mongoose = require('mongoose')
var Team = mongoose.model('Team');

var TeamsController = {


      index: function(req, res){
            Team.find({}, function(err, teams){
                  if(err){
                        console.log(err);
                        res.status(500);
                        res.json(err);
                  }
                  else{
                        res.json(teams);
                  }
            })
      },
      create: function(req, res){
            Team.create(req.body, function(err, newTeam){
                  if(err){
                        console.log(err);
                        res.status(500);
                        res.json(err);
                  }
                  else{
                        res.json(true);
                  }
            })
      },
      // delete: function(req, res){
      //       Team.remove({_id: req.params.id })
      //       .then(function(){
      //             res.json(true);
      //       })
      //       .catch(function(err){
      //             console.log(err);
      //             res.status(500);
      //             res.json(err);
      //       })
      // },
      delete: function(req, res){
            console.log("Running teams delete function on back end")
            Team.findOne({_id: req.params.id}, function(err, team){
                  console.log("errors - ", err);
                  console.log("result - ", team);
                  if(err){
                        console.log('something went wrong while finding a team for deleting', err);
                  } else {
                        console.log("successfully got team data for deleting!");
                        // res.json({placeholder:'delete'});
                        Team.remove({_id: team._id}, function(err, result){
                              if(err){
                                    console.log('something went wrong while deleting a team', err);
                                    res.json(err);
                              } else {
                                    console.log("successfully deleted a team!");
                                    res.json(result);
                              }
                        });
                  }
            });
      },

      update: function(req, res){
            Team.update({_id: req.params.id }, req.body)
            .then(function(){
                  res.json(true);
            })
            .catch(function(err){
                  console.log(err);
                  res.status(500);
                  res.json(err);
            })
      },
}

module.exports = TeamsController; // what does this export?
