// const { Model } = require("sequelize/types");

module.exports = (sequelize, Sequelize) => {
    const Topics = sequelize.define(
        'topics', 
        {
            id :{
                type: Sequelize.INTEGER,
                allowNull : false,
                primaryKey : true,
                autoIncrement : true
            },
             topicsTitle : Sequelize.STRING,
            // tutorId : Sequelize.INTEGER,
            // coursesId : Sequelize.INTEGER

            
        }
    );
    return Topics;

} 