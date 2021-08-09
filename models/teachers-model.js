module.exports = (sequelize, Sequelize) => {
    const Teachers = sequelize.define("teachers", {
        cpf: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
    })

    return Teachers
}