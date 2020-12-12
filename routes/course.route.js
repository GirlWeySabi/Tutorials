const express = require('express');
const router = express.Router();
const passport = require('passport');
const checkLogout = require('../middleware/logout');


const controllerC = require('../controllers/course.controller');


router.get('/allcourses', passport.authenticate("jwt.authors",{session:false}), controllerC.retrieve);

router.get('/singlecourse', passport.authenticate("jwt.authors",{session:false}), controllerC.findOne);

router.post('/create', passport.authenticate("jwt.authors",{session:false}), checkLogout, controllerC.create);

router.post('/create/pic/:courseId', passport.authenticate("jwt.authors",{session:false}), checkLogout, controllerC.profilePicture);


router.put('/update', passport.authenticate("jwt.authors",{session:false}), checkLogout, controllerC.update);

router.delete('/delete', passport.authenticate("jwt.authors",{session:false}), checkLogout, controllerC.destroy);



module.exports = router;