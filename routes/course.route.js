const express = require('express');
const router = express.Router();
const passport = require('passport');


const controllerC = require('../controllers/course.controller');


router.get('/', passport.authenticate("jwt",{session:false}), controllerC.retrieve);

router.post('/', passport.authenticate("jwt",{session:false}), controllerC.create);

router.put('/:id', passport.authenticate("jwt",{session:false}), controllerC.update);

router.delete('/:id', passport.authenticate("jwt",{session:false}), controllerC.destroy);



module.exports = router;