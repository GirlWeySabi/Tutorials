const express = require('express');
const router = express.Router();


const controllerC = require('../controllers/course.controller');


router.get('/', controllerC.retrieve);

router.post('/', controllerC.create);

router.put('/:id', controllerC.update);

// router.delete('/:id', controller.destroy);



module.exports = router;