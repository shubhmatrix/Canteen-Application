"use strict";
const { Router } = require("express");
const canteenRoute = require("./CanteenRoute");
const employeeRoute = require("./EmployeeRoute");
const router = Router();

router.use(canteenRoute);
router.use(employeeRoute);

module.exports = router;
