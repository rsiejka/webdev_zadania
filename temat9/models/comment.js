const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    Tresc: {
        type: String,
        required: true,
    },
    Data: {
        type: Date,
        required: true,
    }
})


const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment

