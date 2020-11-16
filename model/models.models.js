class Models{
    constructor(sequelize, Sequelize){
        this.sequelize = sequelize,
        this.Sequelize = Sequelize
    }

    authors = () => {
        return  this.sequelize.define(
            'author',{
                id : { 
                    type: this.Sequelize.INTEGER,
                    allowNull : false,
                    autoIncrement : true,
                    primaryKey : true
                },
                firstName : this.Sequelize.STRING,
                lastName : this.Sequelize.STRING,
                email : this.Sequelize.STRING,
                phoneNumber : this.Sequelize.STRING,
        
            }
        );
    }

    comment = () => {
        return  this.sequelize.define(
            'comment', 
            {
                id :{ 
                    type: this.Sequelize.INTEGER,
                    allowNull : false,
                    primaryKey: true,
                    autoIncrement : true
                    
                } ,
                
                comment : {
                    type : this.Sequelize.STRING,
                    allowNull : false,
                },
            }
           
        );
    }

    courses = () => {
        return this.sequelize.define(
            'course', 
            {
                id : {
                    type : this.Sequelize.INTEGER,
                    allowNull : false,
                    autoIncrement : true,
                    primaryKey : true
                },
                courseTitle : this.Sequelize.STRING,
            }
        );
    }

    reaction = () => {
        return this.sequelize.define(
            'reaction', 
            {
                id :{ 
                    type: this.Sequelize.INTEGER,
                    allowNull : false,
                    primaryKey: true,
                    autoIncrement : true                
                } ,
                
                react :{ 
                    type: this.Sequelize.BOOLEAN,
                    allowNull : false,
                    
                },
                
            }
           
        );
    }

    topics = () => {
        return  this.sequelize.define(
            'topics', 
            {
                id :{
                    type: this.Sequelize.INTEGER,
                    allowNull : false,
                    primaryKey : true,
                    autoIncrement : true
                },
                 topicsTitle : this.Sequelize.STRING,
            }
        );
    } 

    user = () => {
        return  this.sequelize.define(
            'user', 
            {
                id : {
                    type : this.Sequelize.INTEGER,
                    allowNull : false,
                    autoIncrement :true,
                    primaryKey : true
                },
                firstName : this.Sequelize.STRING,
                lastName : this.Sequelize.STRING,
                email : this.Sequelize.STRING,
            }
        );
    }
}
module.exports = Models;