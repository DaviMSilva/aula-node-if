const sequelize = require('sequelize')
const Sequelize = require('sequelize')
const db = require('./db.js')

const Car = db.define('cars', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  model: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
    notEmpty: {
      msg: 'username nao pode ser em branco'
    }
  },
  potencia: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: {
      msg: 'password nao pode ser em branco'
    }
  },
  velMax: {
    type: Sequelize.INTEGER,
    allowNull: false,
    notEmpty: {
      msg: 'velocidade maxima nao pode ser em branco'
    }
  },
  fabricante: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: {
      msg: 'password nao pode ser em branco'
    }
  },
  ano: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: {
      msg: 'password nao pode ser em branco'
    }
  },
  valor: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: {
      msg: 'password nao pode ser em branco'
    }
  },
})

Car.sync()

module.exports = Car
