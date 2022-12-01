const express = require('express')
const router = express.Router()
const  EmployeeController  = require('../controllers/EmployeesController.js')

router.post('/employee/login', EmployeeController.login)
router.get('/employee/getEmployees', EmployeeController.getdata)

module.exports = router