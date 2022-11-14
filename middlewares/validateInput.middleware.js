const { checkSchema, validationResult } = require('express-validator');
const { message, variable } = require('../constants');

module.exports = (schema) => {
    // console.log(schema);
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
            next();
        },
    ];
};
