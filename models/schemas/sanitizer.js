const bcrypt = require('bcryptjs');
const { message, variable } = require('../../constants');

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
    bail: true,
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
    bail: true,
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

// find documents have this value of the input field in database and return result base on type of condition
const isExisted = (field, Model, isDuplicated) => {
    const customSanitizer = {
        custom: {
            options: (value) =>
                Model.findOne({ [field]: value }).then((result) => {
                    if (result && isDuplicated) {
                        return Promise.reject(
                            message[`${field.toUpperCase()}_DUPLICATED`]
                        );
                    }
                    if (!result && !isDuplicated) {
                        return Promise.reject(
                            message[`${field.toUpperCase()}_NOT_FOUND`]
                        );
                    }
                }),
            bail: true,
        },
    };
    return customSanitizer;
};

// compare between 2 values with type of condition
const isMatched = (field, comparedValue, matchesType) => {
    const customSanitizer = {
        custom: {
            options: (value) => {
                let result;
                switch (matchesType) {
                    case variable.matchesType.bcrypt:
                        result = bcrypt.compareSync(value, comparedValue);
                        break;
                    case variable.matchesType.common:
                        // result = (value === comparedValue)
                        break;
                    default:
                        result = value === comparedValue;
                }
                if (!result)
                    return Promise.reject(message[`${field.toUpperCase()}_`]);
            },
        },
    };
    return customSanitizer;
};
module.exports = { username, password, email, requiredOption, isExisted };
