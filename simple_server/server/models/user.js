var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    required: true,
    trim: true
  },

  birthdate: {
    type: Date,
    default: new Date()

  },



})
console.log('exporting Userschema model')
module.exports = mongoose.model('User', UserSchema);
