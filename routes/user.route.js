const express = require('express');
const router = express.Router();
const passport = require('passport');
// const logout = require('express-passport-logout');

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// jwtOptions.jwtFromRequest;
const comparePassword = require('../middleware/comparePassword');
const checkEmail = require('../middleware/checkEmail');

const controller = require('../controllers/user.controller');
const clearLogout = require('../middleware/clearLogout');
const checkLogout = require('../middleware/logout');


router.post('/follow/:id', passport.authenticate("jwt",{session:false}), controller.follow);

router.get('/profile', passport.authenticate("jwt",{session:false}), controller.profile);
router.post('/upload/profilepic', passport.authenticate("jwt",{session:false}), controller.profilePicture);
router.post('/register', controller.create);
router.put('/update',passport.authenticate("jwt",{session:false}), controller.update);
router.delete('/delete',passport.authenticate("jwt",{session:false}), controller.destroy);
router.post('/login', controller.login); 
router.get('/profile', passport.authenticate("jwt",{session:false}), checkLogout, controller.profile);

router.post('/upload/profilepic', passport.authenticate("jwt",{session:false}), checkLogout, controller.profilePicture);

router.post('/register', checkEmail.checkUserEmail ,comparePassword, controller.create);

router.put('/update',passport.authenticate("jwt",{session:false}), checkLogout, controller.update);

router.delete('/delete',passport.authenticate("jwt",{session:false}), checkLogout, controller.destroy);

router.post('/login', clearLogout, controller.login);

router.post('/logout', passport.authenticate("jwt",{session:false}), checkLogout, controller.logout);




module.exports = router;