// Status
const message = {
    // DB
    DB_CONNECT_SUCCESS: 'DB connection successfully',
    DB_CONNECT_FAIL: 'Cannot connect to DB',

    // State
    SUCCESS: 'OK',
    FAIL: 'ERROR',

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
    REFRESH_SUCCESS: 'New tokens have been sent',
    REFRESH_FAILED: 'Unable to refresh',

    // Others
    TOKEN_MISSING: 'Missing token',
    TOKEN_INVALID: 'This is not a valid token',
    TOKEN_EXPIRED: 'Token is out of date',
    UPLOAD_LIMITED: 'This upload contains more than the allowed amount',
    UPLOAD_FAILED: 'Upload files are not eligible',
    MIMETYPE_INVALID: 'We not support this type of file',
    BUFFER_INVALID: '',
    FILES_LENGTH_INVALID: '',
    FILES_SIZE_INVALID: '',

    // Description
    COMPLETE_RESPONSE: 'Good response',
    VALIDATE_ERROR: 'Errors happened in validation state',
    REQUIRE_PERMISSION: 'You do not have permission to perform this action',
    NOT_FOUND: 'Not found',
    AUTHENTICATE_ERROR: 'Met problems in verifying credential information',

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
    DESCRIPTION_INVALID: 'Description is limited by 200 characters',
};

module.exports = message;
