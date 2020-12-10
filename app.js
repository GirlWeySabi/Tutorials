var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');


var authorsRouter = require('./routes/authors');
const userRoute = require('./routes/user.route');
const courseRoute = require('./routes/course.route');
const reactionRoute = require('./routes/reaction.route');
const commentRoute = require('./routes/comment.route');
var topicsRouter = require('./routes/topics');
const forgetRouter = require('./routes/forgetPassword.route');
const adminRoute = require('./routes/admin.route');

// middleware
const isAdmin = require('./middleware/isAdmin');


const db = require('./model');

var app = express();

db.sequelize.sync({force :false});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(passport.initialize());
require('./config/passport')(passport);
// require('./config/authorsPassport')(passport);
// require('./config/forgetPassport')(passport);


app.use('/authors', authorsRouter);
app.use('/users', userRoute);
app.use('/course', courseRoute);
app.use('/reaction', reactionRoute);
app.use('/comment', commentRoute);
app.use('/topics', topicsRouter);
app.use('/forget', forgetRouter);
app.use('/admin', passport.authenticate("jwt",{session:false}), isAdmin, adminRoute);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

