// const { Model } = require("sequelize/types");

module.exports = (sequelize, Sequelize) => {
    const Reaction = sequelize.define(
        'reaction', 
        {
            id :{ 
                type: Sequelize.INTEGER,
                allowNull : false,
                primaryKey: true,
                autoIncrement : true
                
            } ,
            userId :{ 
                type: Sequelize.INTEGER,
                allowNull : false,
                
            } ,
            topicId :{ 
                type: Sequelize.INTEGER,
                allowNull : false,
                
            } ,
            react :{ 
                type: Sequelize.BOOLEAN,
                allowNull : false,
                
            } ,
            
        }
       
    );
    return Reaction;
}