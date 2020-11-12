const express = require('express');
const router = express.Router();


const controller = require('../controllers/reaction.controller');


router.get('/', controller.retrieve);

router.get('/:id', controller.findOne);

router.post('/', controller.create);

router.put('/:id', controller.update);

router.delete('/:id', controller.destroy);



module.exports = router;