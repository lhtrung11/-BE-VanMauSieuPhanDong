const {
    checkSchema,
    validationResult,
    matchedData,
} = require('express-validator');
const { message, variable } = require('../constants');

module.exports = (schema) => {
    return [
        checkSchema(schema),
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res
                    .status(variable.httpStatus.UNPROCESSABLE_ENTITY)
                    .json({
                        description: message.VALIDATE_ERROR,
                        errors: {
                            list: errors.array(),
                            total: errors.array().length,
                        },
                    });
            }

            req.input = matchedData(req, {
                includeOptionals: true,
                onlyValidData: true,
            });
            next();
        },
    ];
};
