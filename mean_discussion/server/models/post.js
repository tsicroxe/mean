console.log('reading post model');
var mongoose = require('mongoose');


var PostSchema = new mongoose.Schema({

    name: String,
    topic_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Topic'},
    user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    comments: [{type: mongoose.Schema.Types.Mixed, ref:'Comment'}],
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    like: Number,
    dislike: Number,
    likes: [{type: mongoose.Schema.Types.ObjectId, ref:'User'}]


});


module.exports = mongoose.model('Post', PostSchema);
