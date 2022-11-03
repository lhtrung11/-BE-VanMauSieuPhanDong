const sanitizer = require('./sanitizer');

exports.registrationSchema = {
    username: sanitizer.username,
    password: sanitizer.password,
    email: sanitizer.email,
};
