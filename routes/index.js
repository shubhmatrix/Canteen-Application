"use strict";
const { Router } = require("express");
const canteenRoute = require("./CanteenRoute");
const employeeRoute = require("./EmployeeRoute");
const foodRoute = require("./FoodRoute")
const router = Router();

router.use(canteenRoute);
router.use(employeeRoute);
router.use(foodRoute)
module.exports = router;
