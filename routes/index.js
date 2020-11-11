const connection = require('./config');
const {Sequelize} = require('sequelize');
const ReactionModel = require('./reaction.model');
const { Topics } = require('../model');

const sequelize = new Sequelize(connection.db, connection.user, connection.password, {
    host : connection.host,
    dialect : connection.dialect
});

const db = { }
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Topics = Topics(sequelize,Sequelize);

module.exports = db;
