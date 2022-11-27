const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    Imie: {
        type: String,
        required: true,
    },
    Nazwisko: {
        type: String,
        required: true,
    },
    Login: {
        type: String,
        required: true,
    },
    Haslo: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
})


const User = mongoose.model('User', UserSchema)

module.exports = User

