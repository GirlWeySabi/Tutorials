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
                email : {
                  type:this.Sequelize.STRING,
                //   unique: true
                },
                phoneNumber : this.Sequelize.STRING,
                password : this.Sequelize.STRING,
                profile_pic: this.Sequelize.STRING,
                isAdmin : this.Sequelize.BOOLEAN
        
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
                photo: this.Sequelize.STRING
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
                 file: this.Sequelize.STRING,
                 content: this.Sequelize.STRING,
                 aprove: this.Sequelize.BOOLEAN 
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
                email :{
                  type: this.Sequelize.STRING,
                //   unique: true
                },
                password : this.Sequelize.STRING,
                confirmPassword : this.Sequelize.STRING,
                profile_pic: this.Sequelize.STRING,

            }
        );
    }
    follow = () => {
        return  this.sequelize.define(
            'follow', 
            {
                id :{
                    type: this.Sequelize.INTEGER,
                    allowNull : false,
                    primaryKey : true,
                    autoIncrement : true
                }
            }
        );
    }

    logout = () => {
        return  this.sequelize.define(
            'logout', 
            {
                id : {
                    type : this.Sequelize.INTEGER,
                    allowNull : false,
                    autoIncrement :true,
                    primaryKey : true
                },
                userid : this.Sequelize.INTEGER,
                email : this.Sequelize.STRING,
                
            }
        );
    }


    forget = () => {
        return  this.sequelize.define(
            'forget', 
            {
                id : {
                    type : this.Sequelize.INTEGER,
                    allowNull : false,
                    autoIncrement :true,
                    primaryKey : true
                },
                email : this.Sequelize.STRING,
                password : this.Sequelize.STRING,
                randomNumber : this.Sequelize.STRING
                
            }
        );
    }

}

module.exports = Models;