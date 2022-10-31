const { validationResult } = require('express-validator');
const { message, variable } = require('../../constants');

const username = {
    in: ['body'],
    errorMessage: `Username ${message.REQUIRED}`,
    custom: {
        options,
    },
};

const password = {
    in: ['body'],
    errorMessage: `Password ${message.REQUIRED}`,
};

const email = {
    in: ['body'],
};
