const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

// ------- DATABASE -------
const db = require('./models/index')

db.sequelize.sync()

// - WARNING!!!!! Lines above drop the database and start over
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.")
// })


// ------- IMPORTING ROUTES -------
const routeAdmin = require('./routes/admin-routes')
const routeTeachers = require('./routes/teachers-routes')
const routeStudents = require('./routes/students-routes')
const routeAll = require ('/routes/routeAll-routes');

app.use(morgan('dev'))
app.use(express.urlencoded({extend: false}))
app.use(express.json())
app.use(cors())

// ------- REGISTERING ROUTES -------
app.use('/admin', routeAdmin)
app.use('/teachers', routeTeachers)
app.use('/students', routeStudents)

app.use((req, res, next) => {
    return res.status(200).send({
        mensagem: "Rota não encontrada"
    })
})

module.exports = app