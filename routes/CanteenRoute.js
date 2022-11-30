const express = require('express')
const router = express.Router()
const { CanteenController } = require('../controllers')

router.get('/' , CanteenController.index)
router.post('/', CanteenController.store)
router.put('/:id', CanteenController.update)
router.delete('/', CanteenController.destroy)
router.get('/:id', CanteenController.details)

module.exports = router