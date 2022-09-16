const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')


router.use((req, res)=>{
    console.log('time: ', Date.now())
    next()
})

app.post('/login',UserController.login)
app.post('/save',UserController.newUser)