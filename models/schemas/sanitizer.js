const { message, variable } = require('../../constants');
const Account = require('../account.model');
// const basicService = require('../../services/basic.service');

// FIELD VALIDATE
const username = {
    exists: {
        options: true,
        errorMessage: 'Username is required!',
        bail: true,
    },
    matches: {
        options: variable.regex.username,
        errorMessage: message.USERNAME_INVALID,
        bail: true,
    },
    custom: {
        options: (username) => !Account.findOne({ username }),
        errorMessage: message.USERNAME_DUPLICATED,
    },
};

const password = {
    exists: {
        options: true,
        errorMessage: 'Password is required!',
        bail: true,
    },
    matches: {
        options: variable.regex.password,
        errorMessage: message.PASSWORD_INVALID,
        bail: true,
    },
};

const email = {
    matches: {
        options: variable.regex.email,
        errorMessage: message.EMAIL_INVALID,
        bail: true,
    },
};

// OPTION VALIDATE

// this field is not required, but it must be corrected while passing in
const requiredOption = {
    optional: true,
    bail: true,
};

module.exports = { username, password, email, requiredOption };
