const connection = require('./config');
const {Sequelize} = require('sequelize');
const Topics = require('./topics.model')
const CommentModel = require('./comment.model')
const authors = require('./authors.model')
const UserModel = require('./user.model');
const CourseModel = require('./course.model');
const ReactionModel = require('./reaction.model')

const sequelize = new Sequelize(connection.db, connection.user, connection.password, {
    host : connection.host,
    dialect : connection.dialect
});

const db = { }
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Topics = Topics (sequelize, Sequelize);
db.CommentModel = CommentModel(sequelize,Sequelize);
db.author = authors(sequelize, Sequelize);
db.UserModel = UserModel (sequelize, Sequelize);
db.CourseModel = CourseModel (sequelize, Sequelize);
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






module.exports = db; 
