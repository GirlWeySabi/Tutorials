module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define(
        'comment', 
        {
            id :{ 
                type: Sequelize.INTEGER,
                allowNull : false,
                primaryKey: true,
                autoIncrement : true
                
            } ,
            firstName :{ 
                type: Sequelize.STRING,
                allowNull : false,
            
                
            } ,
            lastName :{ 
                type: Sequelize.STRING,
                allowNull : false,
            
            } ,
            email :{ 
                type: Sequelize.STRING,
                allowNull : false,
                
            } ,
            comment : {
                type : Sequelize.STRING,
                allowNull : false,
            },
        }
       
    );
    return Comment;
}