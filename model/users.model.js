module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define(
        'user', {
            id : {
                type : Sequelize.INTEGER,
                allowNull : false,
                autoIncrement :true,
                primaryKey : true
            },
            firstName : Sequelize.STRING,
            lastName : Sequelize.STRING,
            email : Sequelize.STRING,
        }
    );
    return User;
}