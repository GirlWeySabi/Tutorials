const express = require('express');
const router = express.Router();
const passport = require('passport');
// const logout = require('express-passport-logout');

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// jwtOptions.jwtFromRequest;

const controller = require('../controllers/user.controller');


router.post('/follow/:id', passport.authenticate("jwt",{session:false}), controller.follow);

router.get('/profile', passport.authenticate("jwt",{session:false}), controller.profile);
router.post('/upload/profilepic', passport.authenticate("jwt",{session:false}), controller.profilePicture);
router.post('/register', controller.create);
router.put('/update',passport.authenticate("jwt",{session:false}), controller.update);
router.delete('/delete',passport.authenticate("jwt",{session:false}), controller.destroy);
router.post('/login', controller.login); 


module.exports = router;