const Sequelize = require('sequelize')
const db = require('./db.js')

const User = db.define('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    notEmpty: {
      msg: 'username nao pode ser em branco'
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: {
      msg: 'password nao pode ser em branco'
    }
  }
})

User.sync()

module.exports = User
