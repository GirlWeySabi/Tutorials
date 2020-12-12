const express = require('express');
const router = express.Router();
const passport = require('passport');
const comparePassword = require('../middleware/comparePassword');
const checkEmail = require('../middleware/checkEmail');

const controller = require('../controllers/user.controller');
const followController = require('../controllers/follow.controller');
const clearLogout = require('../middleware/clearLogout');
const checkLogout = require('../middleware/logout');


router.get('/profile', passport.authenticate("jwt.users",{session:false}), checkLogout, controller.profile);

router.post('/upload/profilepic', passport.authenticate("jwt.users",{session:false}), checkLogout, controller.profilePicture);

router.post('/register', checkEmail.checkUserEmail ,comparePassword, controller.create);

router.put('/update',passport.authenticate("jwt.users",{session:false}), checkLogout, controller.update);

router.delete('/delete',passport.authenticate("jwt.users",{session:false}), checkLogout, controller.destroy);

router.post('/login', clearLogout, controller.login);

router.post('/logout', passport.authenticate("jwt.users",{session:false}), checkLogout, controller.logout);

router.post('/follow/:id', passport.authenticate("jwt.users",{session:false}), checkLogout, followController.follow);

router.get('/whoamfollowing', passport.authenticate("jwt.users",{session:false}), checkLogout, followController.whoYouFollow);

router.delete('/unfollow/:id', passport.authenticate("jwt.users",{session:false}), checkLogout, followController.unFollow);







module.exports = router;