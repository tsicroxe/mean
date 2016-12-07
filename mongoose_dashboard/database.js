var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/basic_mongoose');

var DogSchema = new mongoose.Schema({
 breed: String,
 life_span: String,
 barking: String,
})
mongoose.model('Dog', DogSchema); // We are setting this Schema in our Models as 'User'

var Dog = mongoose.model('Dog', DogSchema);

mongoose.Promise = global.Promise;

module.exports = Dog;
// var Dog = mongoose.model('Dog') // We are retrieving this Schema from our Models, named 'User'
