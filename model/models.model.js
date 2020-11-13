class Models {

    

    constructor(sequelize, Sequelize){
        this.sequelize = sequelize;
        this.Sequelize = Sequelize;

    //     this.authors().hasOne(this.topics());
    //     this.topics().belongsTo(this.authors());
    }

     authors = () =>{
        return this.sequelize.define(
            'authors',{
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

                
        
            },
            
        );
        
     }



     topics = () => {
        return this.sequelize.define(
            'topics', 
            {
                id :{
                    type: this.Sequelize.INTEGER,
                    allowNull : false,
                    primaryKey : true,
                    autoIncrement : true
                },
                 topicsTitle : this.Sequelize.STRING,
                // tutorId : this.Sequelize.INTEGER,
                // coursesId : this.Sequelize.INTEGER
    
                
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

    
}

module.exports = Models;