const db = require('../models')

const Teacher = db.teachers

exports.create = (req, res) => {
    const teacher = {
        cpf: req.body.cpf,
        password: req.body.password        
    }

    Teacher.create(teacher)
        .then(data => {
            return res.status(201).send({
                message: "Teacher created!",
                client: data
            })
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message
            })
        })
}

exports.getAll = (req, res) => {
    Teacher.findAll()
        .then(data => {
            return res.status(200).send(data)
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message
            })
        })
}

exports.find = (req, res) => {
    Teacher.findOne({
        where: {
            id: req.body.id
        }
    })
        .then(teacher => {
            return res.status(200).send({
                message: "I found this one",
                teacher: teacher
            })
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message
            })
        })
}

exports.update = (req, res) => {
    const id_teacher = req.body.id

    const teacher = {
        id: id_teacher,
        cpf: req.body.cpf,
        password: req.body.password       
    }

    Teacher.update(teacher, {
        where: {
            id: id_teacher
        }
    })
        .then(status => {
            if (status == 1) {
                return res.status(202).send({
                    message: "Updated sucessfully!"
                })
            } else {
                return res.status(202).send({
                    message: "Cannot update"
                })
            }
        })
        .catch(err => {
            return res.status(500).send({
                messagem: "Internal error: " + err.message
            })
        })
}

exports.delete = (req, res) => {
    Teacher.findByPk(req.body.id)
        .then(data => {
            data.destroy()
        })
        .then(id => {
            return res.status(202).send({
                message: "Deleted",
                data: id
            })
        })
        .catch(err => {
            return res.status(500).send({
                message: "Internal sever error: " + err.message
            })
        })
}