const express = require('express');

const routes = express.Router();

/*Logon Controller*/
const SessionController = require('./controllers/SessionController');
routes.post('/login', SessionController.login);
routes.post('/register', SessionController.register);
routes.post('/verifyauth', SessionController.verifyauth);

module.exports = routes;