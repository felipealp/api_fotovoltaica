const express = require('express');
const routes = express.Router();

const UserController = require('../app/controllers/UserController');

routes.get('/', UserController.index)
routes.post('/', UserController.index)
routes.put('/', UserController.index)
routes.delete('/', UserController.index)

module.exports = routes;