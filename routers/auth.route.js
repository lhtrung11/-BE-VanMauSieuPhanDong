const express = require('express');
const { login, register, logout } = require('../controllers/auth.controller');
const validateInput = require('../middlewares/validateInput.middleware');
const schema = require('../models/schemas/schema');
const Router = express.Router();

Router.route('/register').post(validateInput(schema.register), register);
Router.route('/login').post(validateInput(schema.login), login);
Router.route('/logout').post(logout);
// Router.route('/refresh').post(refresh);

module.exports = Router;
