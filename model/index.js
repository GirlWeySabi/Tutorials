const connection = require('./config');
const {Sequelize} = require('sequelize');
const ReactionModel = require('./reaction.model')

const sequelize = new Sequelize(connection.db, connection.user, connection.password, {
    host : connection.host,
    dialect : connection.dialect
});

const db = { }
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.ReactionModel = ReactionModel(sequelize,Sequelize);

module.exports = db;
