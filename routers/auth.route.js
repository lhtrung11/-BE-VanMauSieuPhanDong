const express = require('express');
const { login, register, logout } = require('../controllers/auth.controller');
const validateInput = require('../middlewares/validateInput.middleware');
const { checkSchema } = require('express-validator');
const schema = require('../models/schemas/schema');

const Router = express.Router();

Router.route('/register').post(
    // checkSchema(schema.register),
    validateInput,
    register
);
Router.route('/login').post(login);
Router.route('/logout').post(logout);
// Router.route('/refresh').post(refresh);

module.exports = Router;
