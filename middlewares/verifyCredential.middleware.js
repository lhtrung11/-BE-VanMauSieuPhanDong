const jwt = require('jsonwebtoken');
const response = require('../helpers/responseHandler.helper');
const { message, variable } = require('../constants');
const { username } = require('../helpers/random.helper');
const { TokenExpiredError } = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // Access Authorization from req header
    Authorization = req.header('authorization');
    if (!Authorization) handleTokenError(0, res);
    req.token = Authorization.replace(/^Bearer\s/, '');
    jwt.verify(req.token, variable.env.key, (err, payload) => {
        if (err)
            return handleTokenError(
                err instanceof TokenExpiredError ? 1 : 2,
                res
            );
        req.private = payload;
        next();
    });
};

const handleTokenError = (type, res) => {
    const output = { errors: [] };
    switch (type) {
        case 0:
            output.errors.push({
                value: null,
                msg: message.TOKEN_MISSING,
                location: 'Verify Credential',
            });
            break;
        case 1:
            output.errors.push({
                value: null,
                msg: message.TOKEN_EXPIRED,
                location: 'Verify Credential',
            });
            break;
        case 2:
            output.errors.push({
                value: null,
                msg: message.TOKEN_INVALID,
                location: 'Verify Credential',
            });
            break;
        default:
            output.errors.push({
                value: null,
                msg: message.FAIL,
                location: 'Verify Credential',
            });
            break;
    }
    response(
        variable.httpStatus.BAD_REQUEST,
        variable.httpStatus.UNAUTHORIZED,
        message.FAIL,
        message.AUTHENTICATE_ERROR,
        output,
        res
    );
};
