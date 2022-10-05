const Car = require('../models/Car');

module.exports = class CarController {
  static async newCar(req, res) {
    const carForm = {
      model: req.body.model,
      potencia: req.body.potencia,
      velMax: req.body.velMax,
      fabricante: req.body.fabricante,
      ano: req.body.ano,
      valor: req.body.valor
    };
    console.log(carForm);

    await Car.create(carForm)
      .then(result => {
        console.log('criado com sucesso');

        res.render('cars/carForm');
      })
      .catch(err => {
        console.log(err);
      });
  }

  static newCarView(req, res) {
    res.render('cars/carForm');
  }

  static async allCars(req, res) {
    try {
      const cars = await Car.findAll({ raw: true });
      res.render('cars/carList', { cars });
    } catch (err) {
      console.log(err);
    }
  }

  static async removeCar(req, res) {
    const { id } = req.body;
    try {
      Car.destroy({ where: { id: id } });
      console.log('removido com sucesso');
    } catch (err) {
      console.log(err);
    }
    res.redirect('/cars/all');
  }
  static async updateCarView(req, res) {
    const id = req.params.id;
    try {
      const car = await Car.findOne({ wher: { id: id }, raw: true });
      res.render('cars/carUpdateForm', { car });
    } catch (err) {
      console.log(err);
    }
  }
  static async updateCar(req, res) {
    const { id } = req.body;
    const carForm = {
      model: req.body.model,
      potencia: req.body.potencia,
      velMax: req.body.velMax,
      fabricante: req.body.fabricante,
      ano: req.body.ano,
      valor: req.body.valor
    };
    console.log(carForm);

    await Car.update(carForm, { where: { id: id } })
      .then(result => {
        console.log('atualizado com sucesso');
        res.redirect('/cars/all');
      })
      .catch(err => {
        console.log(err);
      });
  }
};
