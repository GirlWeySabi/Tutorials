const express = require('express');
const authorsRoute = express.Router();
const passport = require('passport');
const conparePassword = require('../middleware/comparePassword');
const checkEmail = require('../middleware/checkEmail');
const checkLogout = require('../middleware/logout');
const clearLogout = require('../middleware/clearLogout');

const controller = require('../controllers/author.cont');

// authorsRoute.get('/', controller.findAll);
authorsRoute.get('/profile', passport.authenticate("jwt.authors",{session:false}), checkLogout, controller.findOne);
authorsRoute.post('/upload/profilepic', passport.authenticate("jwt.authors",{session:false}), checkLogout, controller.profilePicture);

authorsRoute.post('/login' , clearLogout , controller.login);

authorsRoute.post('/register',checkEmail.checkAuthorsEmail, conparePassword, controller.create);

authorsRoute.put('/update', passport.authenticate("jwt.authors",{session:false}), checkLogout, controller.update);

authorsRoute.delete('/:id', passport.authenticate("jwt.authors",{session:false}), checkLogout, controller.remove);

authorsRoute.post('/logout', passport.authenticate("jwt.authors",{session:false}), checkLogout, controller.logout);

module.exports = authorsRoute;