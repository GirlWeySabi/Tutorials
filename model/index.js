const connection = require('./config');
const {Sequelize} = require('sequelize');
const Topics = require('./topics.model')
const CommentModel = require('./comment.model')
const authors = require('./authors.model')
const UserModel = require('./user.model');
const CourseModel = require('./course.model');
const ReactionModel = require('./reaction.model')
const models = new require('./models.model');

const sequelize = new Sequelize(connection.db, connection.user, connection.password, {
    host : connection.host,
    dialect : connection.dialect
});

const Models = new models(sequelize,Sequelize);
const db = { }
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Topics = Models.topics();
db.CommentModel = CommentModel(sequelize,Sequelize);
db.author = Models.authors();
db.UserModel = UserModel (sequelize, Sequelize);
db.CourseModel = Models.courses();
db.ReactionModel = ReactionModel(sequelize,Sequelize);

//associating authors and topics
db.author.hasMany(db.Topics);
db.Topics.belongsTo(db.author);

//associating courses and topics
db.CourseModel.hasMany(db.Topics);
db.Topics.belongsTo(db.CourseModel);

//associating users and comment
db.UserModel.hasOne(db.CommentModel);
db.CommentModel.belongsTo(db.UserModel);

//associating users and reaction
db.UserModel.hasOne(db.ReactionModel);
db.ReactionModel.belongsTo(db.UserModel);

//associating topics and comments
db.Topics.hasMany(db.CommentModel);
db.CommentModel.belongsTo(db.Topics);

//associating topics and reaction
db.Topics.hasMany(db.ReactionModel);
db.ReactionModel.belongsTo(db.Topics);




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

// db.CommentModel.hasOne(db.ReactionModel);
// db.ReactionModel.belongsTo(db.CommentModel,{
//     foreignKey: {
//         allowNull : false
//       }
// });



module.exports = db; 
