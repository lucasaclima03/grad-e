module.exports = (sequelize, Sequelize) => {
    const  Admin= sequelize.define("admin", {
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
    })

    return Admin
}