const Car = require('../models/Car')

module.exports = class CarController {
    
    static async newCar(req,res){
        const carForm = {
            model : req.body.model,
            potencia : req.body.potencia,
            velMax : req.boy.velMax
        }

        await Car.create({carForm})
        .then(result =>{
            console.log('criado com sucesso')
            res.render('cars/carForm')

        })
        .catch(err =>{
            console.log(err)
        })
    }
    static newCarView(req,res){
        res.render('cars/carForm')
    }
}