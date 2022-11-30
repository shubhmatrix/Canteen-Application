const express = require('express')
const router = express.Router()
const  CanteenController  = require('../controllers/EmployeesController.js')

router.post('/employee/login', CanteenController.login)
router.get('/employee/getEmployees', CanteenController.getEmployees)

module.exports = router