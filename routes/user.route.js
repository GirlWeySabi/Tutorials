const express = require('express');
const router = express.Router();


const controller = require('../controllers/user.controller');


router.get('/', controller.retrieve);

router.post('/', controller.create);

router.put('/:id', controller.update);

router.delete('/:id', controller.destroy);



module.exports = router;