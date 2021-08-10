const db = require('../models')

const Student = db.students

exports.create = (req, res) => {
    const student = {
        registration: req.body.registration,
        password: req.body.password        
    }

    Student.create(student)
        .then(data => {
            return res.status(201).send({
                message: "Student created!",
                student: data
            })
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message
            })
        })
}

exports.getAll = (req, res) => {
    Student.findAll()
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
    Student.findOne({
        where: {
            id: req.body.id
        }
    })
        .then(student => {
            return res.status(200).send({
                message: "I found this one",
                student: student
            })
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message
            })
        })
}

exports.update = (req, res) => {
    const id_student = req.body.id

    const student = {
        id: id_student,
        registration: req.body.registration
              
    }

    Student.update(student, {
        where: {
            id: id_student
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
    Student.findByPk(req.body.id)
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