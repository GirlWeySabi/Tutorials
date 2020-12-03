const express = require('express');
const router = express.Router();
const passport = require('passport')

const controller = require('../controllers/user.controller');


router.get('/profile', passport.authenticate("jwt",{session:false}), controller.profile);
router.post('/register', controller.create);
router.put('/update',passport.authenticate("jwt",{session:false}), controller.update);
router.delete('/delete',passport.authenticate("jwt",{session:false}), controller.destroy);
router.post('/login', controller.login);



module.exports = router;