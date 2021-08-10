const express = require('express')
const router = express.Router()

const StudentsController = require('../controllers/students-controller')

router.get('/', StudentsController.getAll)
router.get('/:id', StudentsController.find)
router.post('/', StudentsController.create)
router.patch('/', StudentsController.update)
router.delete('/', StudentsController.delete)

module.exports = router