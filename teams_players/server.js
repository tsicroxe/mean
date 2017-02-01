var express = require('express');
var bodyParser = require('body-parser')
var path = require('path');
var app = express();
var PORT = 8000;

app.use(bodyParser.json());
app.use(express.static(path.resolve('client')))
app.use(express.static(path.resolve('bower_components')))

app.listen(PORT, function(){
  console.log(`Running on ${PORT}`)
});

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/teams_players')
mongoose.Promise = global.Promise;

var TeamSchema = new mongoose.Schema({
    name: String
})

var PlayerSchema = new mongoose.Schema({
    name: String,
    team: {type: mongoose.Schema.Types.ObjectId, ref:'Team'}
})
var Team = mongoose.model('Team', TeamSchema);
var Player = mongoose.model('Player', PlayerSchema);

app.get('/', function(req, res){
  res.render('index')
})

//BEGIN PLAYERCONTROLLER
var PlayerController = {
    index: function(req, res){
      Player.find({})
      .populate('team')
      .exec(function(err, players){
        if(err){
          console.log(err)
        } else {
          res.json(players)
        }
      })
    },
    create: function(req, res){
      Player.create(req.body, function(err, player){
        if(err){
          console.log(err)
          res.status(500);
          res.json(err);
        } else {
          res.json({success: true, player })
        }
      })
    },
    delete: function(req, res){
      Player.remove({_id: req.params.id})
      .then(function(){
        res.json(true);
      })
      .catch(function(err){
        console.log(err);
        res.status(500);
        res.json(err);
      })
    },
    update: function(req, res){
      Player.update({_id: req.params.id}, res.body)
      .then(function(){
        res.json(true);
      })
      .catch(function(err){
        console.log(err);
        res.status(500);
        res.json(err);
      })
    },
    update: function(req, res){
      Player.update({_id: req.params.id}, res.body)
      .then(function(){
        res.json(true);
      })
      .catch(function(err){
        console.log(err);
        res.status(500);
        res.json(err);
      })
    },
    removeTeam: function(req, res){
      Player.find({_id: req.params.id})
      .then(function(player){
        if(player.team){
          delete player.team
        }
        return player.save()
      })
      .then(function(){
        res.json(true);
      })
      .catch(function(err){
        console.log(err);
        res.status(500);
        res.json(err);
      })
    }
}
//END PLAYERCONTROLLER

//BEGIN TEAMCONTROLLER
var TeamController = {
    index: function(req, res){
      Team.find({}, function(err, players){
        if(err){
          console.log(err)
        } else {
          res.json(players)
        }
      })
    },
    create: function(req, res){
      Team.create(req.body, function(err){
        if(err){
          console.log(err)
          res.status(500);
          res.json(err);
        } else {
          res.json(true)
        }
      })
    },
    delete: function(req, res){
      Team.remove({_id: req.params.id})
      .then(function(){
        res.json(true);
      })
      .catch(function(err){
        console.log(err);
        res.status(500);
        res.json(err);
      })
    }
}
//END TEAMCONTROLLER

app.get('/players', PlayerController.index);
app.post('/players', PlayerController.create);
app.delete('/players/:id', PlayerController.delete);
app.put('/players/:id', PlayerController.update);

app.get('/teams', TeamController.index);
app.post('/teams', TeamController.create);
app.delete('/teams/:id', TeamController.delete)

app.delete('/players/:player_id/remove-team', PlayerController.removeTeam)
