const mongoose = require('mongoose')

const GallerySchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    tytul: {
        type: String,
        required: true,
    },
    Opis: {
        type: String,
        required: true,
    },
    Data: {
        type: Date,
        required: true,
    },
    Nazwa: {
        type: String,
        required: true,
    },
    Rozmiar: {
        type: Number,
        required: true,
    },
})


const Gallery = mongoose.model('Gallery', GallerySchema)

module.exports = Gallery

