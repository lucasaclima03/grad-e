const express = require('express')
const router = express.Router()

const AdminController = require('../controllers/admin-controller')

router.get('/', AdminController.getAll)
router.get('/:id', AdminController.find)
router.post('/', AdminController.create)
router.patch('/', AdminController.update)
router.delete('/', AdminController.delete)

module.exports = router