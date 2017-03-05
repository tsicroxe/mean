var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};
console.log('reading user model');
var mongoose = require('mongoose');
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
    required: [true, 'Test'],
    minlength: [3, 'Minimum length is 2'],
    unique: [true, 'Username already exists'],
  },

  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    minlength: [5, 'Minimum length is 5'],
    validate: [validateEmail, 'Email must be a real email']
  },

  password: {
      type: String,
      required:true,
      trim: true,
      minlength: [5, 'Minimum length is 5'],
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
