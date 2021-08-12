const express = require('express')
const router = express.Router()

const login = require('../middlewares/login')

const TeachersController = require('../controllers/teachers-controller')

router.get('/teachers', login.login, TeachersController.getAll)
router.get('/teachers/:id', login.login, TeachersController.find)
router.post('/teachers', login.login, TeachersController.create)
router.patch('/teachers', login.login, TeachersController.update)
router.delete('/teachers', login.login, TeachersController.delete)

module.exports = router