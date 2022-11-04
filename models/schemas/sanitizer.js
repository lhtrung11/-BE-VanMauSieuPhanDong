const { message, variable } = require('../../constants');

const username = {
    in: ['body'],
    notEmpty: true,
    errorMessage: 'username field cannot be empty',
};

const password = {
    // in: ['body'],
    // errorMessage: `Password ${message.REQUIRED}`,
    notEmpty: true,
    errorMessage: 'password field cannot be empty',
};

const email = {
    notEmpty: true,
    errorMessage: 'email field cannot be empty',
};

module.exports = { username, password, email };
