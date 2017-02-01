var mongoose = require('mongoose');
var path = require('path')

var models_path = path.join(__dirname, '../models');
var User = require(models_path + '/User');

mongoose.connect('mongodb://localhost/session_test')

mongoose.Promise = global.Promise;

mongoose.connection.on('connected', function(){
  console.log('database connected');
})

mongoose.connection.on('error', function(err){
  console.log(err);
});
