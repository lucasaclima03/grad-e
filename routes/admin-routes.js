const express = require('express')
const router = express.Router()

const login = require('../middlewares/login')

const AdminController = require('../controllers/admin-controller')

router.get('/admin', login.login, AdminController.getAll)
router.get('/admin/:id', login.login, AdminController.find)
router.post('/admin', login.login, AdminController.create)
router.patch('/admin', login.login, AdminController.update)
router.delete('/admin', login.login, AdminController.delete)

module.exports = router