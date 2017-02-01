console.log('player model');
var mongoose = require('mongoose');
// build your friend schema and add it to the mongoose.models
var PlayerSchema = new mongoose.Schema({
  name: String,
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
  },
});


mongoose.model('Player', PlayerSchema);
