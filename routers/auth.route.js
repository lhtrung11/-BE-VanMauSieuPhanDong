const express = require('express');
const authController = require('../controllers/auth.controller');
const validateInput = require('../middlewares/validateInput.middleware');
const verifyCredential = require('../middlewares/verifyCredential.middleware');
const schema = require('../models/schemas/schema');
const Router = express.Router();

Router.route('/register').post(
    validateInput(schema.register),
    authController.register
);
Router.route('/login').post(validateInput(schema.login), authController.login);
Router.route('/logout').post(authController.logout);
Router.route('/refresh').post(verifyCredential, authController.refresh);

module.exports = Router;
