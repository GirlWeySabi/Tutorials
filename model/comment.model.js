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
            
            comment : {
                type : Sequelize.STRING,
                allowNull : false,
            },
        }
       
    );
    return Comment;
}