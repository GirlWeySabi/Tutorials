const express = require('express');
const router = express.Router();
const passport = require('passport');

const controller = require('../controllers/followers.controller');

// router.get('/', controller.retrieve);

router.get('/:id', passport.authenticate("jwt",{session:false}), controller.findOne);
router.get('/', passport.authenticate("jwt",{session:false}), controller.findAll);
router.post('/:id',  passport.authenticate("jwt",{session:false}), controller.follow);
router.delete('/:id', passport.authenticate("jwt",{session:false}), controller.unfollow);

module.exports = router;