var express = require('express');
var router = express.Router();
const passport = require('passport');
const multipleUpload = require('../middleware/multiple.upload');

var controllers = require('../controllers/topics');
const checkLogout = require('../middleware/logout');

router.get('/alltopics', controllers.retrieve);
  
router.post('/:courseId', passport.authenticate("jwt.authors",{session:false}), checkLogout ,controllers.create);
router.post('/upload/:topicId', passport.authenticate("jwt.authors",{session:false}) , checkLogout, multipleUpload, controllers.upload);

router.put('/delete',passport.authenticate("jwt.authors",{session:false}) , checkLogout , controllers.update);

router.delete('/update', passport.authenticate("jwt.authors",{session:false}) , checkLogout ,controllers.destroy);



module.exports = router;