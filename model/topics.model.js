
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
        }
    );
    return Topics;
} 