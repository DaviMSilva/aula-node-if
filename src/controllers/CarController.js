const Car = require('../models/Car')

module.exports = class CarController {
    
    static async newCar(req,res){
        const carForm = {
            model : req.body.model,
            potencia : req.body.potencia,
            velMax : req.boy.velMax
        }

        Car.create({carForm})
        .then(result =>{
            console.log('criado com sucesso')
        })
        .catch(err =>{
            console.log(err)
        })
    }
    static newCarView(req,res){
        
    }
}