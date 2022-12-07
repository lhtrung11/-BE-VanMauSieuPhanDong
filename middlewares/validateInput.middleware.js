const {
    checkSchema,
    validationResult,
    matchedData,
} = require('express-validator');
const multer = require('multer');
const { message, variable } = require('../constants');

const handleFilesUpload = multer().array('contents');

const collectData = (req, res, next) => {
    if (req.files) {
        req.body.contents = [...req.files];
    }
    next();
};

module.exports = (schema, option = 0) => {
    let validator = [
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
    switch (option) {
        case variable.validateType.default:
            break;
        case variable.validateType.createVerse:
            validator = [handleFilesUpload, collectData, ...validator];
            break;
    }
    return validator;
};
