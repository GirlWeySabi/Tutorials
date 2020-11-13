const connection = require('./config');
const {Sequelize} = require('sequelize');
const models =  require('./models.model');

const sequelize = new Sequelize(connection.db, connection.user, connection.password, {
    host : connection.host,
    dialect : connection.dialect
});

const Models = new models(sequelize,Sequelize);
const db = { }

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Topics = Models.topics();
db.CommentModel = Models.comment();
db.author = Models.authors();
db.UserModel = Models.user();
db.CourseModel = Models.courses();
db.ReactionModel = Models.reaction();



//associating users and comment
db.UserModel.hasOne(db.CommentModel);
db.CommentModel.belongsTo(db.UserModel,{
    foreignKey: {
        allowNull : false
      }
});

//associating users and reaction
db.UserModel.hasOne(db.ReactionModel);
db.ReactionModel.belongsTo(db.UserModel,{
    foreignKey: {
        allowNull : false
      }
});

//associating topics and comments
db.Topics.hasMany(db.CommentModel);
db.CommentModel.belongsTo(db.Topics,{
    foreignKey: {
        allowNull : false
      }
});

//associating topics and reaction
db.Topics.hasMany(db.ReactionModel);
db.ReactionModel.belongsTo(db.Topics,{
    foreignKey: {
        allowNull : false
      }
});




db.author.hasMany(db.Topics);
db.Topics.belongsTo(db.author,{
    foreignKey: {
        allowNull : false
      }
});

db.author.hasOne(db.CourseModel);
db.CourseModel.belongsTo(db.author,{
    foreignKey: {
        allowNull : false
      }
});



db.CourseModel.hasOne(db.Topics);
db.Topics.belongsTo(db.CourseModel,{
    foreignKey: {
        allowNull : false
      }
});


module.exports = db; 
