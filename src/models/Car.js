const Sequelize = require('sequelize')
const db = require('./db.js')

const Car = db.define('Car',{
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoincrement: true,
        primaryKey: true
    },
    model:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
        notEmpty:{
            msg: "username nao pode ser em branco"
        }
    },
    potencia:{
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: {
            msg: "password nao pode ser em branco"
        }
    },
    velMax:{
        type: Sequelize.INTEGER,
        allowNull: false,
        notEmpty:{
            msg: "velocidade maxima nao pode ser em branco"
        }

    }

})

Car.sync()

module.exports = Car