const jwt = require('jsonwebtoken');
const { variable } = require('../constants');

const createToken = (data, options) => {
    return jwt.sign(data, variable.env.key, options);
};

exports.login = (ModelHistory, input) => {
    try {
        const result = { data: null, errors: [] };
        result.data = {
            accessToken: createToken({ input }, { expiredIn: '2h' }),
            refreshToken: createToken({ input }, { expiredIn: '7d' }),
        };
        return result;
    } catch (error) {
        return errorFormatter(result, error);
    }
};
