const { google } = require('googleapis');
const { message, variable } = require('../constants');

const oauth2ImgClient = new google.auth.OAuth2(
    variable.env.imgStorageClientId,
    variable.env.imgStorageClientSecret,
    variable.env.redirectUri
);

// const oauth2VidClient = new google.auth.OAuth2(
//     variable.env.vidStorageClientId,
//     variable.env.vidStorageClientSecret,
//     variable.env.redirectUri
// );

// const oauth2GifClient = new google.auth.OAuth2(
//     variable.env.gifStorageClientId,
//     variable.env.gifStorageClientSecret,
//     variable.env.redirectUri
// );

// const oauth2AudClient = new google.auth.OAuth2(
//     variable.env.audStorageClientId,
//     variable.env.audStorageClientSecret,
//     variable.env.redirectUri
// );

const imgClientRefreshToken =
    '1//0432BqDeQhgjTCgYIARAAGAQSNwF-L9IrsFLL6AI32hBJCPRuvNuXtoclZeTzbHtYmVjAlUVEMmW1dLAZxY1DWFG4kTV3Ud_Lu5Y';
// const vidClientRefreshToken =
//     '1//0432BqDeQhgjTCgYIARAAGAQSNwF-L9IrsFLL6AI32hBJCPRuvNuXtoclZeTzbHtYmVjAlUVEMmW1dLAZxY1DWFG4kTV3Ud_Lu5Y';
// const gifClientRefreshToken =
//     '1//0432BqDeQhgjTCgYIARAAGAQSNwF-L9IrsFLL6AI32hBJCPRuvNuXtoclZeTzbHtYmVjAlUVEMmW1dLAZxY1DWFG4kTV3Ud_Lu5Y';
// const audClientRefreshToken =
//     '1//0432BqDeQhgjTCgYIARAAGAQSNwF-L9IrsFLL6AI32hBJCPRuvNuXtoclZeTzbHtYmVjAlUVEMmW1dLAZxY1DWFG4kTV3Ud_Lu5Y';

oauth2ImgClient.setCredentials(imgClientRefreshToken);
// oauth2VidClient.setCredentials(vidClientRefreshToken);
// oauth2GifClient.setCredentials(gifClientRefreshToken);
// oauth2AudClient.setCredentials(audClientRefreshToken);

exports.imgStorage = google.drive({
    version: 'v3',
    auth: oauth2ImgClient,
});

// exports.vidStorage = google.drive({
//     version: 'v3',
//     auth: oauth2VidClient,
// });

// exports.gifStorage = google.drive({
//     version: 'v3',
//     auth: oauth2GifClient,
// });

// exports.audStorage = google.drive({
//     version: 'v3',
//     auth: oauth2AudClient,
// });
