const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')

//Model
const db = require('./src/models/db')
//const User = require('./src/models/User')



const app = express()
const path = require('path')
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))



// View Engine Setup
app.engine('handlebars', handlebars.engine())
app.set('views', path.join(__dirname, './src/views'))
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/src/public'))


app.get('/', (req, res) => {
  res.render('home')
})




app.listen(3333)
