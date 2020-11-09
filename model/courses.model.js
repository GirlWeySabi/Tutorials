module.exports = (sequelize, Sequelize) => {
    const Course = sequelize.define(
        'course', {
            id : {
                type : Sequelize.INTEGER,
                allowNull : false,
                autoIncrement :true,
                primaryKey : true
            },
            courseTitle : Sequelize.STRING,
        }
    )
}