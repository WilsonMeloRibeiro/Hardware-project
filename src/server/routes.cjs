const express = require('express');
const  UserController = require('../controllers/UserController.cjs');
const routes = express.Router();

routes.post('/', UserController.store);
routes.post('/email', UserController.verifyEmail);
routes.post('/userVerify', UserController.verifyUser);
routes.get('/userVerify', UserController.verifySession);

module.exports = routes;