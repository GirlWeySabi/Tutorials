const express = require('express');
const router = express.Router();
const passport = require('passport');

const controller = require('../controllers/comment.controller');
const checkLogout = require('../middleware/logout');



// router.get('/', controller.retrieve);
router.get('/allcomment', passport.authenticate("jwt.users",{session:false}), checkLogout, controller.retrieve);

router.get('/singlecomment', passport.authenticate("jwt.users",{session:false}), checkLogout, controller.findOne);

router.post('/:topicId', passport.authenticate("jwt.users",{session:false}), checkLogout, controller.create);

router.put('/update', passport.authenticate("jwt.users",{session:false}), checkLogout, controller.update);

router.delete('/delete', passport.authenticate("jwt.users",{session:false}), checkLogout, controller.destroy);



module.exports = router;