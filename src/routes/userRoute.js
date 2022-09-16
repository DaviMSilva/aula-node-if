const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')

router.get('/login',UserController.verifyIfSessionExists, UserController.loginView)
router.post('/login',UserController.verifyIfSessionExists, UserController.login)
router.post('/logout', UserController.logout)
router.get('/add', UserController.newUser)
router.post('/add', UserController.newUserSave)

module.exports = router
