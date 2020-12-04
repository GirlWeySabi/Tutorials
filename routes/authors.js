const express = require('express');
const authorsRoute = express.Router();
const passport = require('passport');

const controller = require('../controllers/author.cont');

// authorsRoute.get('/', controller.findAll);
authorsRoute.get('/profile', passport.authenticate("jwt",{session:false}), controller.findOne);
authorsRoute.post('/upload/profilepic', passport.authenticate("jwt",{session:false}), controller.profilePicture);

authorsRoute.post('/login', controller.login);

authorsRoute.post('/register', controller.create);

authorsRoute.put('/update', passport.authenticate("jwt",{session:false}), controller.update);

authorsRoute.delete('/:id', passport.authenticate("jwt",{session:false}), controller.remove);

module.exports = authorsRoute;