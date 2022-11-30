const jwt = require('jsonwebtoken');
const response = require('../helpers/responseHandler.helper');
const { message, variable } = require('../constants');

exports.verifyCredential = (req, res, next) => {
    // Access Authorization from req header
    const Authorization = req.header('authorization');
    if (!Authorization) {
        const errors = [
            {
                value: null,
                msg: message.MISSING_TOKEN,
                location: 'Verify Credential',
            },
        ];
        res.status(variable.httpStatus.UNAUTHORIZED).json({
            description: message.AUTHENTICATE_ERROR,
            errors: {
                list: errors.array(),
                total: errors.array().length,
            },
        });
    }
    const accessToken = Authorization.replace('Bearer ', '');
    req.private = jwt.verify(accessToken, process.env.APP_SECRET);
    next();
};
