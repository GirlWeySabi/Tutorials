const express = require('express');
const router = express.Router();
const forget = require('../controllers/forgetpassword.controller');
const comparePassword = require('../middleware/comparePassword');
const compareRandomDigit = require('../middleware/compareRandomDigit');
const updatePasswordAuthor = require('../middleware/updatePasswordAuthor');
const updatePasswordUser = require('../middleware/updatePasswordUser');
const passport = require('passport');

router.post('/author', comparePassword, forget.verifyEmailAuthor);
router.post('/user', comparePassword, forget.verifyEmailUser);

router.post('/changepasswordauthor', passport.authenticate("jwt.forget",{session:false}), compareRandomDigit, updatePasswordAuthor, forget.changePassword);
router.post('/changepassworduser', passport.authenticate("jwt.forget",{session:false}), compareRandomDigit, updatePasswordUser, forget.changePassword);


module.exports = router