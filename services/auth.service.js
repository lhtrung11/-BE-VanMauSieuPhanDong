const jwt = require('jsonwebtoken');
const { variable } = require('../constants');
const errorFormatter = require('../helpers/errorFormatter.helper');

const createToken = (payload, options) => {
    return jwt.sign(payload, variable.env.key, options);
};

exports.login = (ModelHistory, input) => {
    const result = { data: null, errors: [] };
    console.log(input);
    try {
        result.data = {
            accessToken: createToken(input, { expiresIn: '2h' }),
            refreshToken: createToken(input, { expiresIn: '7d' }),
        };
        return result;
    } catch (error) {
        return errorFormatter(result, error);
    }
};

exports.logout = (ModelHistory, input) => {
    const result = { data: null, errors: [] };
    try {
        return result;
    } catch (error) {
        return errorFormatter(result, error);
    }
};

exports.refresh = (ModelHistory, input, refreshToken) => {
    const result = { data: null, errors: [] };
    try {
        result.data = {
            accessToken: createToken(input, { expiresIn: '2h' }),
            refreshToken: refreshToken,
        };
        return result;
    } catch (error) {
        return errorFormatter(result, error);
    }
};
