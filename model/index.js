const connection = require('./config');
const {Sequelize} = require('sequelize');
const UserModel = require('./user.model');
const CourseModel = require('./course.model');

const sequelize = new Sequelize(connection.db, connection.user, connection.password, {
    host : connection.host,
    dialect : connection.dialect
});

const db = { }
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.UserModel = UserModel (sequelize, Sequelize);
db.CourseModel = CourseModel (sequelize, Sequelize);

module.exports = db; 
