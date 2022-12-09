// const bodyParser = require('body-parser')
const express = require('express')
const port = 3000
const bodyParser = require('body-parser')
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
const swaggerUi = require('swagger-ui-express');
const usersRoutes = require('./routes/users.js')
const picturesRoutes = require('./routes/pictures.js')
const mongoose = require('./db/mongoose')
const Picture = require('./models/picture')

const app = express()

app.use('/users', usersRoutes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/pictures', picturesRoutes)

app.set('view engine', 'hbs')
app.use(bodyParser.json()) 

//dodanie elementu

// const picture = new Picture({nazwa: 'foto_01', sciezke: './images', rozmiar: '2345'})
// picture.save().then(() => {console.log(picture)}).catch(err => console.log(err))



//wypisanie elementu

// Picture.find({}).then((pictures)=>{
//     console.log(pictures)
// }).catch(err => {
//     console.log(err)
// })



//wypisanie asynchroniczne

// const getPictures = async () => {
//     try{
//         const pictures = await Picture.find()
//         console.log(pictures)
//     }catch{
//         console.log(error)
//     }
// }

// getPictures()



//wyszukiwanie z argumentem

// Picture.find({
//     rozmiar: {$gt: 2345}
// }).then((pictures) => {
//     console.log(pictures)
// })



//aktualizacja

// Picture.updateOne(
//     {nazwa: 'foto_02'},
//     {$set: {
//         rozmiar: 5345
//     }}
// ).then((pictures) => {
//     console.log(pictures)
// })



app.listen(port)


