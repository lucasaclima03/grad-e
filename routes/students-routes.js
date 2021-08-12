const express = require('express')
const router = express.Router()

const login = require('../middlewares/login')

const StudentsController = require('../controllers/students-controller')

router.get('/students', login.login, StudentsController.getAll)
router.get('/students/:id', login.login, StudentsController.find)
router.post('/students', login.login, StudentsController.create)
router.patch('/students', login.login, StudentsController.update)
router.delete('/students', login.login, StudentsController.delete)

module.exports = router