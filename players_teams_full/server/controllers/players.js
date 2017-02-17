
console.log("loading the controller file - players.js");


module.exports = function(){

}
var mongoose = require('mongoose')
var Player = mongoose.model('Player');
var Team = mongoose.model('Team')
var path = require('path');


var PlayersController = {


      index: function(req, res){
            Player.find({})
            .populate('team')
            .exec(function(err, players){
                  if(err){
                        console.log(err);
                        res.status(500);
                        res.json(err);
                  }
                  else{
                        res.json(players);
                  }
            })
      },
      create: function(req, res){
            console.log('post data --> ' + req.body)
            Player.create(req.body, function(err, player){
                  if(err){
                        console.log("Error!!!")
                        console.log(err);
                        res.status(500);
                        res.json(err);
                  }
                  else{
                        console.log(player);
                        res.json({success: true, player});
                  }
            })
      },
      delete: function(req, res){
            Player.findOne({_id: req.params.id}, function(err, player){
                  console.log("errors - ", err);
                  console.log("result - ", player);
                  if(err){
                        console.log('something went wrong while finding a player for deleting', err);
                  } else {
                        console.log("successfully got player data for deleting!");
                        // res.json({placeholder:'delete'});
                        Player.remove({_id: player._id}, function(err, result){
                              if(err){
                                    console.log('something went wrong while deleting a player', err);
                                    res.json(err);
                              } else {
                                    console.log("successfully deleted a player!");
                                    res.json(result);
                              }
                        });
                  }
            });
      },
      update: function(req, res){
            Player.update({_id: req.params.id }, req.body)
            .then(function(){
                  res.json(true);
            })
            .catch(function(err){
                  console.log(err);
                  res.status(500);
                  res.json(err);
            })
      },

      addPlayerToTeam: function(req, res){
            console.log('playerId > ', req.body.playerId);
            console.log('teamId > ', req.body.teamId);

            Player.findById({_id: req.body.playerId})
              .then(function(player) {
                    console.log('Found player for updating', player)
                    player.team = req.body.teamId
                    console.log(player);
                    player.save();
                    console.log('sending response with player back')
                    res.json({success: true, player});

              })
              .catch(console.error)

      },

      removePlayerFromTeam: function(req, res){
            console.log('removeplayerfromteam req.body', req);
            // Player.findById({_id: req.body.player._id})
      //       .then(function(player){
      //             res.json({success: true, player})
      //             console.log('done removed')
      //       })
      //       .catch(console.error)
      }
}

module.exports = PlayersController; // what does this export?
