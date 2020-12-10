const express = require('express');
const router = express.Router();
const passport = require('passport');
const checkLogout = require('../middleware/logout');


const controllerC = require('../controllers/course.controller');


router.get('/', controllerC.retrieve);
router.get('/allcourses', passport.authenticate("jwt",{session:false}), controllerC.retrieve);

router.get('/singlecourse', passport.authenticate("jwt",{session:false}), controllerC.findOne);

router.post('/create', passport.authenticate("jwt",{session:false}), checkLogout, controllerC.create);

router.put('/update', passport.authenticate("jwt",{session:false}), checkLogout, controllerC.update);

router.delete('/delete', passport.authenticate("jwt",{session:false}), checkLogout, controllerC.destroy);



module.exports = router;