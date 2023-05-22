const express = require('express');
const  UserController = require('../controllers/UserController.cjs');
const routes = express.Router();

routes.post('/', UserController.store);
routes.get('/email', UserController.verifyEmail);
routes.get('/password', UserController.verifyPassword);

module.exports = routes;