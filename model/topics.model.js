
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
<<<<<<< HEAD
=======
            // tutorId : Sequelize.INTEGER,
            // coursesId : Sequelize.INTEGER

>>>>>>> 5747ffc59af03501c2da0da58cd2052bd714b492
            
        }
    );
    return Topics;
} 