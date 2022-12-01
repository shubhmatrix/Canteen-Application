const express = require('express')
const router = express.Router()
const FoodController  = require('../controllers/FoodController.js')

router.get('/food/getfood' , FoodController.getFood)
router.post('/food/addfood', FoodController.addFood)

module.exports = router