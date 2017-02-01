var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    required: true,
    trim: true
  },

  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },

  password: {
    type: String,
    require: true,
    trim: true
  }


})

UserSchema.pre('save', function(next){
  if(!this.isModified('password')) return next();

  var self = this;

  bcrypt.hash(this.password, 10)
    .then(function(hash){
      self.password = hash;
      next();
    })
    .catch(next);
});

UserSchema.methods.verifyPassword = function(password){
  return bcrypt.compare(password, this.password)
}

module.exports = mongoose.model('User', UserSchema);
