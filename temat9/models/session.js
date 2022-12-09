const mongoose = require('mongoose')

const SessionSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    Token: {
        type: Number,
        required: true,
    },
    Waznosc: {
        type: Date,
        required: true,
    }
})


const Session = mongoose.model('Session', SessionSchema)

module.exports = Session

