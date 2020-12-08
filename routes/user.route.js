const express = require('express');
const router = express.Router();
const passport = require('passport');
// const logout = require('express-passport-logout');

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// jwtOptions.jwtFromRequest;

const controller = require('../controllers/user.controller');


router.get('/profile', passport.authenticate("jwt",{session:false}), controller.profile);
router.post('/upload/profilepic', passport.authenticate("jwt",{session:false}), controller.profilePicture);
router.post('/register', controller.create);
router.put('/update',passport.authenticate("jwt",{session:false}), controller.update);
router.delete('/delete',passport.authenticate("jwt",{session:false}), controller.destroy);
router.post('/login', controller.login);
router.get('/logout', passport.authenticate("jwt",{session:false}), (req, res)=>{
    const token = jwt.sign(payLoad,"", {maxAge: 1});
    res.json("loged out");

}); 


module.exports = router;