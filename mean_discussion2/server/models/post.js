console.log('reading post model');
var mongoose = require('mongoose');


var PostSchema = new mongoose.Schema({

    post: String,
    topic: {type: mongoose.Schema.Types.ObjectId, ref: 'Topic'},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    comments: [{type: mongoose.Schema.Types.ObjectId, ref:'Comment'}],
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    like: Number,
    dislike: Number,
    likes: [{type: mongoose.Schema.Types.ObjectId, ref:'User'}]


});


module.exports = mongoose.model('Post', PostSchema);
