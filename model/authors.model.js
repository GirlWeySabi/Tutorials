module.exports = (sequelize, Sequelize) => {
    const Author = sequelize.define(
        'author',{
            id : { 
                type: Sequelize.INTEGER,
                allowNull : false,
                autoIncrement : true,
                primaryKey : true
            },
            firstName : Sequelize.STRING,
            lastName : Sequelize.STRING,
            email : Sequelize.STRING,
            phoneNumber : Sequelize.STRING,
    
        }
    );
    return Author;
}