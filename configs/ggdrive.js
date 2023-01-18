const { google } = require('googleapis');
const { message, variable } = require('../constants');
const path = require('path');

const auth = new google.auth.GoogleAuth({
    keyFile: path.join(
        __dirname,
        variable.defaultValue.defaultFile.db01_key_json
    ),
    scopes: [variable.url.storageAuth],
});

exports.imgStorage = google.drive({
    version: 'v3',
    auth,
});
