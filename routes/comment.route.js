const express = require('express');
const router = express.Router();
const passport = require('passport');

const controller = require('../controllers/comment.controller');



// router.get('/', controller.retrieve);

router.get('/', passport.authenticate("jwt",{session:false}), controller.findOne);

router.post('/:topicId', passport.authenticate("jwt",{session:false}), controller.create);

router.put('/:id', passport.authenticate("jwt",{session:false}), controller.update);

router.delete('/:id', passport.authenticate("jwt",{session:false}), controller.destroy);



module.exports = router;