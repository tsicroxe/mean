var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dojo_quotes');

var QuoteSchema = new mongoose.Schema({
 name: String,
 quote: String,
 },
 {
   timestamps: true
 }
)

mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'User'


mongoose.Promise = global.Promise;

module.exports = mongoose.model('Quote', QuoteSchema);
// var Dog = mongoose.model('Dog') // We are retrieving this Schema from our Models, named 'User'
