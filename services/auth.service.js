const jwt = require('jsonwebtoken');
const { variable } = require('../constants');
const errorFormatter = require('../helpers/errorFormatter.helper');

const createToken = (payload, options) => {
    return jwt.sign(payload, variable.env.key, options);
};

exports.login = (ModelHistory, input) => {
    const result = { data: null, errors: [] };
    try {
        result.data = {
            accessToken: createToken(
                { ...input, token: variable.tokenType.access },
                { expiresIn: '2h' }
            ),
            refreshToken: createToken(
                { ...input, token: variable.tokenType.refresh },
                { expiresIn: '7d' }
            ),
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
        delete input.exp;
        delete input.iat;
        result.data = {
            accessToken: createToken(
                { ...input, token: variable.tokenType.access },
                { expiresIn: '2h' }
            ),
            refreshToken: refreshToken,
        };
        return result;
    } catch (error) {
        return errorFormatter(result, error);
    }
};
