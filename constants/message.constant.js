// Status
const message = {
    // DB
    DB_CONNECT_SUCCESS: 'DB connection successfully',
    DB_CONNECT_FAIL: 'Cannot connect to DB',

    // State
    SUCCESS: 'OK',
    FAIL: 'ERR',

    // Description
    COMPLETE_RESPONSE: 'Response Successfully',
    VALIDATE_ERROR: 'Validation Failed',
    REQUIRE_PERMISSION: 'You do not have permission to perform this action',
    NOT_FOUND: 'Not found',

    // Validate
    REQUIRED: 'required',
    USERNAME_INVALID:
        'The username between 3 and 16 characters, allowing alphanumeric characters and hyphens and underscores!',
    PASSWORD_INVALID:
        'The password must contains 8 characters minimum, at least one letter and one number!',
    EMAIL_INVALID: 'This email is invalid!',
};

module.exports = message;
