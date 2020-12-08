var express = require('express');
var router = express.Router();
const passport = require('passport');

var controllers = require('../controllers/topics');

router.get('/', passport.authenticate("jwt",{session:false}),controllers.retrieve);
  
router.post('/:courseId', passport.authenticate("jwt",{session:false}),controllers.create);
router.post('/upload', passport.authenticate("jwt",{session:false}),controllers.upload);
router.put('/:id',passport.authenticate("jwt",{session:false}), controllers.update);
router.delete('/:id', passport.authenticate("jwt",{session:false}),controllers.destroy);



module.exports = router;