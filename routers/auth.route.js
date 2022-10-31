const express = require('express');
const { login, register, logout } = require('../controllers/auth.controller');
const validateInput = require('../middlewares/validateInput.middleware');

const Router = express.Router();

Router.route('/register').post(validateInput(), register);
Router.route('/login').post(login);
Router.route('/logout').post(logout);
// Router.route('/refresh').post(refresh);

module.exports = Router;
