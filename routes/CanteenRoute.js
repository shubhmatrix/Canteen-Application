const express = require('express')
const router = express.Router()
const  CanteenController  = require('../controllers/CanteenController.js')

router.get('/canteen/order' , CanteenController.orderFood)
router.get('/canteen/list' , CanteenController.getFoodList)
//router.post('canteen/', CanteenController.store)
module.exports = router