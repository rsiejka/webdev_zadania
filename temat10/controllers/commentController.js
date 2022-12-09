var Picture = require('../models/picture')

exports.index = function(req, res){
    console.log("wywołanie get index")
    res.send("Not implemented: site home page")
}

exports.picture_list = function(req, res){
    let picturesList

    const getPictures = async () => {
        try{
            picturesList = await Picture.find()
            console.log(picturesList)
            res.send(picturesList)
        }catch(err){
            console.log(err)
        }
    }

    getPictures()
}

exports.picture_create_post = function(rq, res){

    const picture = new Picture({nazwa: 'foto12', sciezka: './images', rozmiar:'2345'})
    picture.save().then(() => {
        console.log(picture)
        res.send('Add new picture')
    }).catch(err => {
        console.log(err)
    })
}

console.log('kontroler gotowy')