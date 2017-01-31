console.log("future routes")
// Will require controller, example:
var players = require('../controllers/players');
var teams = require('../controllers/teams');


module.exports = function(app){
  app.get('/players', players.index);
  // app.get('/players/:id', players.show);
  app.post('/players', players.create);
  app.put('/players/:id', players.update);
  app.delete('/players/:id', players.delete);
  //
  app.get('/teams', teams.index);
  // app.get('/teams/:id', teams.show);
  app.post('/teams', teams.create);
  app.put('/teams/:id', teams.update);
  app.delete('/teams/:id', teams.delete);
  //

  app.put('/associations', players.addPlayerToTeam)

}
