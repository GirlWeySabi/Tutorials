const express = require('express');
const router = express.Router();
const passport = require('passport');
const checkLogout = require('../middleware/logout');


const controller = require('../controllers/reaction.controller');


router.get('/allreaction', passport.authenticate("jwt",{session:false}), checkLogout, controller.retrieve);

router.get('/singlereaction',passport.authenticate("jwt",{session:false}), checkLogout, controller.findOne);

router.post('/:topicId', passport.authenticate("jwt",{session:false}), checkLogout, controller.create);

router.put('/update', passport.authenticate("jwt",{session:false}), checkLogout, controller.update);

router.delete('/delete', passport.authenticate("jwt",{session:false}), checkLogout, controller.destroy);



module.exports = router;