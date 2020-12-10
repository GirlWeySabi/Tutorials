const connection = require('./config');
const {Sequelize, Model} = require('sequelize');
const models = require('./models.models')

const sequelize = new Sequelize(connection.db, connection.user, connection.password, {
    host : connection.host,
    dialect : connection.dialect
});

const Models = new models(sequelize,Sequelize);
const db = { }
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.topics = Models.topics();
db.comment = Models.comment();
db.author = Models.authors();
db.user = Models.user ();
db.courses = Models.courses();
db.reaction = Models.reaction();

//associating authors and topics

db.author.hasMany(db.topics);
db.topics.belongsTo(db.author);

db.author.hasMany(db.courses);
db.courses.belongsTo(db.author);

//associating courses and topics
db.courses.hasMany(db.topics);
db.topics.belongsTo(db.courses);

//associating users and comment
db.user.hasOne(db.comment);
db.comment.belongsTo(db.user);

//associating users and reaction
db.user.hasOne(db.reaction);
db.reaction.belongsTo(db.user);

//associating topics and comments
db.topics.hasMany(db.comment);
db.comment.belongsTo(db.topics);

//associating topics and reaction
db.topics.hasMany(db.reaction);
db.reaction.belongsTo(db.topics);

//associating author and follower
db.author.hasMany(db.followers);
db.followers.belongsTo(db.author);

module.exports = db; 
