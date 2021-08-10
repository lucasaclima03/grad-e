module.exports = (sequelize, Sequelize) => {
    const Students = sequelize.define("students", {
        registration: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
    })

    return Students
}