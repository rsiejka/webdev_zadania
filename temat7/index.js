// const bodyParser = require('body-parser')
const express = require('express')
const port = 3000
const bodyParser = require('body-parser')
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
const swaggerUi = require('swagger-ui-express');
const usersRoutes = require('./routes/users.js')

const app = express()

app.use('/users', usersRoutes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.set('view engine', 'hbs')
app.use(bodyParser.json()) 

app.listen(port)