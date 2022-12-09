const { google } = require('googleapis');
const { message, variable } = require('../constants');

const auth = new google.auth.GoogleAuth({
    keyFile: variable.path.databaseKey01,
    scopes: [variable.url.storageAuth],
});

console.log(auth);

exports.imgStorage = google.drive({
    version: 'v3',
    auth,
});

// const oauth2ImgClient = new google.auth.OAuth2(
//     variable.env.imgStorageClientId,
//     variable.env.imgStorageClientSecret,
//     variable.env.redirectUri
// );

// const oauth2VidClient = new google.auth.OAuth2(
//     variable.env.vidStorageClientId,
//     variable.env.vidStorageClientSecret,
//     variable.env.redirectUri
// );

// const imgClientRefreshToken =
//     '1//047FgLyQyDPHfCgYIARAAGAQSNwF-L9IrMGGs8fOsdN55uJQb2jk4f0q_Do7_jdH7w0RVnMf5yxR-Wyl4zfqmhgOlFqzqU_lxtJI';

// const vidClientRefreshToken =
//     '1//04LFCwG2YFScUCgYIARAAGAQSNwF-L9Ir-6E5ULW5OAu3YLUlG9EyKj6TLVgy_WoaZHXyiT2VUlFfHgfWCP3Y8_Zojv6A8KLSYeY';

// oauth2ImgClient.setCredentials({ refresh_token: imgClientRefreshToken });
// oauth2VidClient.setCredentials({ refresh_token: vidClientRefreshToken });

// exports.imgStorage = google.drive({
//     version: 'v3',
//     auth: variable.env.imgStorageApiKey,
// });

// exports.vidStorage = google.drive({
//     version: 'v3',
//     auth: oauth2VidClient,
// });
