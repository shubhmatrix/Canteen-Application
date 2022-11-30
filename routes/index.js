"use strict";
const { Router } = require("express");
const canteenRoute = require("./CanteenRoute");
const router = Router();

router.use(canteenRoute);

module.exports = router;
