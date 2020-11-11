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

module.exports = db; 
