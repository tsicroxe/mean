
console.log("loading the controller file - players.js");


module.exports = function(){

}
var mongoose = require('mongoose')
var Player = mongoose.model('Player');
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
}

module.exports = PlayersController; // what does this export?
