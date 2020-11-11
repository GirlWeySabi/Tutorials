var express = require('express');
var router = express.Router();

var controllers = require('../controllers/topics');

router.get('/', controllers.retrieve);
  
router.post('/', controllers.create);

router.put('/:id', controllers.update);

router.delete('/:id', controllers.destroy);



module.exports = router;