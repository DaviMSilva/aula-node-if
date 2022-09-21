const User = require('../models/User')

module.exports = class UserController {
  static verifyIfSessionExists(req, res, next) {
    if (req.session.login) {
      res.redirect('/home')
    }
    return next()
  }

  static newUser(req, res) {
    res.render('users/userform')
  }
  static async newUserSave(req, res) {
    const { username, password } = req.body
  
    await User.create({ username: username, password: password })
      .then(result => {
        console.log('criado com sucess')
      })
      .catch(err => {
        console.log(err)
      })

    res.redirect('login')
  }

  static async loginView(req, res) {
    res.render('users/login')
  }

  static async login(req, res) {
    const { username, password } = req.body
    console.log(username, password)
    await User.findOne({
      where: {
        username: username
      }
    })
      .then(result => {
        if (result.password === password) {
          req.session.login = username
        } else {
          res.render('users/login', { alert: true })
        }
        res.redirect('/home')
      })
      .catch(err => {
        console.log(err)
      })
  }

  static logout(req, res) {
    req.session.login = null
  }
  static logoutView(req, res){
    res.render('users/logout')
  }

  static async allUsers(req, res) {
    const users = await User.findAll({
      raw: true,
      attributes: ['username', 'password', 'id']
    })

    res.render('users/allusers', { users })
  }

  static async remove(req, res) {
    await User.destroy({
      where: {
        id: req.body.id
      }
    }).then(result => {
      res.render('home')
    })
  }
}
