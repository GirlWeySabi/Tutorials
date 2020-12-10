const express = require('express');
const router = express.Router();
const passport = require('passport');


const controller = require('../controllers/course.controller');


router.get('/', controller.retrieve);

router.post('/', passport.authenticate("jwt",{session:false}), controller.create);

router.put('/:id', passport.authenticate("jwt",{session:false}), controller.update);

router.delete('/:id', passport.authenticate("jwt",{session:false}), controller.destroy);



module.exports = router;