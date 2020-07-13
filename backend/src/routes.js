const express = require('express');

const routes = express.Router();

/*Logon Controller*/
const LogonController = require('./controllers/LogonController');
routes.get('/login', LogonController.login);
routes.post('/register', LogonController.register);

module.exports = routes;