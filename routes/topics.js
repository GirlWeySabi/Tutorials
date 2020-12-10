var express = require('express');
var router = express.Router();
const passport = require('passport');

var controllers = require('../controllers/topics');
const checkLogout = require('../middleware/logout');

router.get('/alltopics', controllers.retrieve);
  
router.post('/:courseId', passport.authenticate("jwt",{session:false}),controllers.create);
router.put('/:id',passport.authenticate("jwt",{session:false}), controllers.update);
router.delete('/:id', passport.authenticate("jwt",{session:false}),controllers.destroy);
router.post('/:courseId', passport.authenticate("jwt",{session:false}), checkLogout ,controllers.create);
router.post('/upload', passport.authenticate("jwt",{session:false}) , checkLogout, controllers.upload);

router.put('/delete',passport.authenticate("jwt",{session:false}) , checkLogout , controllers.update);

router.delete('/update', passport.authenticate("jwt",{session:false}) , checkLogout ,controllers.destroy);



module.exports = router;