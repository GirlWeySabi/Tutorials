const connection = require('./config');
const {Sequelize} = require('sequelize');
const authors = require('./authors.model')

const sequelize = new Sequelize(connection.db, connection.user, connection.password, {
    host : connection.host,
    dialect : connection.dialect
});

const db = { }
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.author = authors(sequelize, Sequelize);

module.exports = db;
