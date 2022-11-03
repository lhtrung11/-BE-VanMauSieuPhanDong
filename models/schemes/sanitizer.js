const { validationResult } = require('express-validator');
const { message, variable } = require('../../constants');

const username = {
    in: ['body'],
};

const password = {
    in: ['body'],
    errorMessage: `Password ${message.REQUIRED}`,
};

const email = {
    in: ['body'],
};

module.exports = { username, password, email };
