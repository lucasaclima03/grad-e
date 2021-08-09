const express = require('express')
const router = express.Router()

const TeachersController = require('../controllers/teachers-controller')

router.get('/', TeachersController.getAll)
router.get('/:id', TeachersController.find)
router.post('/', TeachersController.create)
router.patch('/', TeachersController.update)
router.delete('/', TeachersController.delete)

module.exports = router