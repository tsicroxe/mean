console.log('reading customer model');
var mongoose = require('mongoose');


var CustomerSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Please enter a name'],
        unique: [true, 'Name cannot be a duplicate']
    }
},

    {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }

});


module.exports = mongoose.model('Customer', CustomerSchema);
