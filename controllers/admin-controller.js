const db = require('../models')

const Admin = db.admin

exports.create = (req, res) => {
    const admin = {
        email: req.body.email,
        password: req.body.password        
    }

    Admin.create(admin)
        .then(data => {
            return res.status(201).send({
                message: "Admin created!",
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
    Admin.findAll()
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
    Admin.findOne({
        where: {
            id: req.body.id
        }
    })
        .then(admin => {
            return res.status(200).send({
                message: "I found this one",
                admin: admin
            })
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message
            })
        })
}

exports.update = (req, res) => {
    const id_admin = req.body.id

    const admin = {
        id: id_admin,
        email: req.body.email,
        password: req.body.password       
    }

    Admin.update(admin, {
        where: {
            id: id_admin
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
    Admin.findByPk(req.body.id)
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