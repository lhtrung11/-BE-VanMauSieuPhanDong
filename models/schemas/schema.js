const sanitizer = require('./sanitizer');

exports.register = {
    username: sanitizer.username,
    password: sanitizer.password,
    email: { ...sanitizer.requiredOption, ...sanitizer.email },
};

exports.login = {
    username: sanitizer.username,
    password: sanitizer.password,
};

exports.refresh = {
    // username: sanitizer.username,
    // password: sanitizer.password,
};
