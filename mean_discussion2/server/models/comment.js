console.log('reading comment model');
var mongoose = require('mongoose');


var CommentSchema = new mongoose.Schema({

    name: String,
    reply: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    // topicId: {type: mongoose.Schema.Types.ObjectId, ref: 'Topic'},
    post: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'},


    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },


});


module.exports = mongoose.model('Comment', CommentSchema);
