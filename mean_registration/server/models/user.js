console.log('reading user model');
var mongoose = require('mongoose');
// build your friend schema and add it to the mongoose.models

var bcrypt = require('bcrypt-as-promised')

var UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    minlength: [2, 'Minimum length is 2'],
    required: true,
    trim: true,
  },
  last_name: {
    type: String,
    required: true,
    minlength: [2, 'Minimum length is 2'],
    trim: true,
  },
  user_name: {
    type:String,
    required: true,
    minlength: [2, 'Minimum length is 2'],
    unique: [true, 'Username already exists'],
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    minlength: 5,
  },
  password: {
      type: String,
      required:true,
      trim: true,
  },
  birthdate: {
      type: Date,
      required: true
  },
  isAdmin: Boolean,
},
  {
  timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
  }
});

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

UserSchema.pre('save', function(next){
  if(!this.isModified('password')) return next();

  var self = this;

  bcrypt.hash(this.password, 10)
  .then(function(hash){
    self.password = hash;
    next();
  })
  .catch(next);
})



// checking if password is valid
UserSchema.methods.verifyPassword = function(password) {
    return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);
