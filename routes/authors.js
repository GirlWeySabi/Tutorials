const express = require('express');
const authorsRoute = express.Router();

const controller = require('../controllers/author.cont');

authorsRoute.get('/', controller.findAll);
authorsRoute.get('/:id', controller.findOne);

authorsRoute.post('/', controller.create);

authorsRoute.put('/:id', controller.update);

authorsRoute.delete('/:id', controller.remove);

module.exports = authorsRoute;