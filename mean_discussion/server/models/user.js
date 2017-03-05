console.log('reading user model');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-as-promised')

var UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Please enter a name'],
        unique: [true, 'Name cannot be a duplicate']
    },
    password: {
        type: String,
        required:true,
        trim: true,
    },
    topics: [{type: mongoose.Schema.Types.Mixed, ref: 'Topic'}],
    posts: [{type: mongoose.Schema.Types.Mixed, ref: 'Post'}],
    comments: [{type: mongoose.Schema.Types.Mixed, ref: 'Comment'}],
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },

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
