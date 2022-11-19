const sanitizer = require('./sanitizer');
const Account = require('../account.model');
const { variable } = require('../../constants');
const { field } = require('../../constants/variable.constant');

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
        value,
        variable.matchesType.bcrypt
    ),
};

exports.refresh = {
    // username: sanitizer.username,
    // password: sanitizer.password,
};
