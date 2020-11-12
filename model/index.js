const connection = require('./config');
const {Sequelize, Model} = require('sequelize');
const Topics = require('./topics.model')
const CommentModel = require('./comment.model')
const authors = require('./authors.model')
const UserModel = require('./user.model');
const CourseModel = require('./course.model');
const ReactionModel = require('./reaction.model');
const courseModel = require('./course.model');

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

// associating the authors with topics
db.author.hasMany(db.Topics);
db.Topics.belongsTo(db.author);

// associating course with topics
db.CourseModel.hasMany(db.Topics);
db.Topics.belongsTo(db.CourseModel);

// associating user with reaction
db.UserModel.hasOne(db.ReactionModel);
db.ReactionModel.belongsTo(db.UserModel);

// ssociating topics with reaction

db.Topics.hasMany(db.ReactionModel);
db.ReactionModel.belongsTo(db.Topics);

// associating user with comments
db.UserModel.hasOne(db.CommentModel);
db.CommentModel.belongsTo(db.UserModel);

// ssociating topics with comments

db.Topics.hasMany(db.CommentModel);
db.CommentModel.belongsTo(db.Topics);
 

module.exports = db; 
