console.log("Future mongoose connection and file loading")
var mongoose = require('mongoose');

var path = require('path')
var models_path = path.join(__dirname, '../models');
var User = require(models_path + '/user');

mongoose.connect('mongodb://localhost/simple_mongoose')

mongoose.Promise = global.Promise;

mongoose.connection.on('connected', function(){
  console.log('database connected');
})

mongoose.connection.on('error', function(err){
  console.log(err);
});
