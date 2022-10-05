const express = require('express');
const router = express.Router();
const CarController = require('../controllers/CarController');

router.get('/add', CarController.newCarView);
router.post('/add', CarController.newCar);
router.get('/all', CarController.allCars);
router.post('/remove', CarController.removeCar);
router.get('/edit/:id', CarController.updateCarView);
router.post('/edit', CarController.updateCar);
module.exports = router;
