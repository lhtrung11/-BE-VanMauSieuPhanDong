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

const description = {
    matches: {
        options: variable.regex.description,
        errorMessage: message.DESCRIPTION_INVALID,
        bail: true,
    },
};

const mimetype = {
    matches: {
        options: variable.regex.mimetype,
        errorMessage: message.MIMETYPE_INVALID,
    },
    bail: true,
};

const buffer = {
    custom: {
        options: (value, { req }) => {
            return !value ? Promise.reject(message.BUFFER_INVALID) : !!value;
        },
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
            options: (value, { req }) =>
                Model.findOne({ [field]: value }).then((result) => {
                    if (isDuplicated && result) {
                        return Promise.reject(
                            message[`${field.toUpperCase()}_DUPLICATED`]
                        );
                    }
                    if (!isDuplicated) {
                        if (!result)
                            return Promise.reject(
                                message[`${field.toUpperCase()}_NOT_FOUND`]
                            );
                        else req.private = { ...result._doc };
                    }
                }),
            bail: true,
        },
    };
    return customSanitizer;
};
// compare between 2 values with type of condition
const isMatched = (field, matchesType) => {
    const customSanitizer = {
        custom: {
            options: (value, { req }) => {
                let result = null;
                switch (matchesType) {
                    case variable.matchesType.bcrypt:
                        if (req.private) {
                            result = bcrypt.compareSync(
                                value,
                                req.private[field]
                            );
                        }
                        break;
                    case variable.matchesType.common:
                        // result = (value === comparedValue)
                        break;
                    default:
                }
                if (!result) {
                    return Promise.reject(
                        message[`${field.toUpperCase()}_NOT_MATCH`]
                    );
                }
                return result;
            },
            bail: true,
        },
    };
    return customSanitizer;
};

const limitTotalFiles = (checkType) => {
    const customSanitizer = {
        custom: {
            options: (value, { req }) => {
                let totalFiles;
                switch (checkType) {
                    case 0:
                        totalFiles = value.length;
                        break;
                }
                if (totalFiles > variable.limit.totalFilesUpload) {
                    value.forEach((v) => {
                        delete v.buffer;
                    });
                    return Promise.reject(message.FILES_LENGTH_INVALID);
                }
            },
        },
        bail: true,
    };
    return customSanitizer;
};

const limitTotalSize = (checkType) => {
    const customSanitizer = {
        custom: {
            options: (value, { req }) => {
                let totalSize;
                switch (checkType) {
                    case 0:
                        totalSize = value.reduce(
                            (accumulator, obj) => accumulator + obj.size,
                            0
                        );
                        break;
                }
                if (totalSize > variable.limit.totalSizeUpload) {
                    value.forEach((v) => {
                        delete v.buffer;
                    });
                    return Promise.reject(message.FILES_SIZE_INVALID);
                }
                return totalSize;
            },
        },
        bail: true,
    };
    return customSanitizer;
};

module.exports = {
    username,
    password,
    email,
    description,
    mimetype,
    buffer,
    requiredOption,
    isExisted,
    isMatched,
    limitTotalFiles,
    limitTotalSize,
};
