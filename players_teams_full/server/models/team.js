console.log('team model');
var mongoose = require('mongoose');
// build your friend schema and add it to the mongoose.models

var TeamSchema = new mongoose.Schema({
  name: String,
  location: String,
  players: [],
})

mongoose.model('Team', TeamSchema);
