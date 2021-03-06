console.log('reading topic model');
var mongoose = require('mongoose');


var TopicSchema = new mongoose.Schema({

    name: String,
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    categoryId: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    posts: Number,
    description: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },

});


module.exports = mongoose.model('Topic', TopicSchema);
