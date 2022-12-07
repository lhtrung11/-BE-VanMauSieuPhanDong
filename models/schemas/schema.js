const sanitizer = require('./sanitizer');
const Account = require('../account.model');
const { variable } = require('../../constants');

exports.register = {
    username: Object.assign(
        { ...sanitizer.username },
        sanitizer.isExisted(
            variable.field.username,
            Account,
            variable.checkIsExistedType.true
        )
    ),
    password: sanitizer.password,
    email: { ...sanitizer.requiredOption, ...sanitizer.email },
};

exports.login = {
    username: sanitizer.isExisted(
        variable.field.username,
        Account,
        variable.checkIsExistedType.false
    ),
    password: sanitizer.isMatched(
        variable.field.password,
        variable.matchesType.bcrypt
    ),
};

exports.refresh = {
    // username: sanitizer.username,
    // password: sanitizer.password,
};

exports.createVerse = {
    description: { ...sanitizer.requiredOption, ...sanitizer.description },
    contents: Object.assign(
        {},
        sanitizer.limitTotalSize(0),
        sanitizer.limitTotalFiles(0)
    ),
    'contents.*.mimetype': sanitizer.mimetype,
    'contents.*.buffer': sanitizer.buffer,
};
