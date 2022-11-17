const mongoose = require("mogoose");

const Schema = mongoose.Schema

let plik = new Schema({
    nazwa: String,
    waga: Number,
    Administrator: Boolean
})

const model = mogoose.model("pliki", plik)

module.exports = model