// Status
const message = {
    // DB
    DB_CONNECT_SUCCESS: 'DB connection successfully',
    DB_CONNECT_FAIL: 'Cannot connect to DB',

    // State
    SUCCESS: 'OK',
    FAIL: 'ERR',

    // CRUD detail
    CREATE_SUCCESS: 'Create data successfully',
    CREATE_FAIL: 'Unable to create data',
    UPDATE_SUCCESS: 'Update data successfully',
    UPDATE_FAIL: 'Unable to update data',
    DELETE_SUCCESS: 'Delete data successfully',
    DELETE_FAIL: 'Unable to delete data',
    READ_SUCCESS: 'Get data successfully',
    READ_FAIL: 'Unable to get data',

    // ACTION detail
    REGISTER_SUCCESS: 'Your account is created successfully',
    REGISTER_FAILED: 'Somethings went wrong',
    SIGNIN_SUCCESS: 'Welcome back',
    SIGNIN_FAILED: 'Somethings went wrong',
    LOGOUT_SUCCESS: 'See you again',
    LOGOUT_FAILED: 'Somethings went wrong',

    // Description
    COMPLETE_RESPONSE: 'Response Successfully',
    VALIDATE_ERROR: 'Validation Failed',
    REQUIRE_PERMISSION: 'You do not have permission to perform this action',
    NOT_FOUND: 'Not found',

    // Validate
    REQUIRED: 'required',
    USERNAME_INVALID:
        'The username between 3 and 16 characters, allowing alphanumeric characters and hyphens and underscores!',
    USERNAME_DUPLICATED: 'This username is already in use!',
    USERNAME_NOT_FOUND: 'Incorrect username',
    PASSWORD_INVALID:
        'The password must contains 8 characters minimum, at least one letter and one number!',
    PASSWORD_NOT_MATCH: 'Password does not match',
    EMAIL_INVALID: 'This email is invalid!',
};

module.exports = message;
