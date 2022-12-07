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

const imgClientRefreshToken =
    '1//04c5yN8-yDjbACgYIARAAGAQSNwF-L9IrgdiGVK5gjqhWTXX-ZRH9fb8HPolA3MupiamLbVwUNU9_Wz-K_HzJIJr_q1FyAqTRARk';
// const vidClientRefreshToken =
//     '1//0432BqDeQhgjTCgYIARAAGAQSNwF-L9IrsFLL6AI32hBJCPRuvNuXtoclZeTzbHtYmVjAlUVEMmW1dLAZxY1DWFG4kTV3Ud_Lu5Y';

oauth2ImgClient.setCredentials(imgClientRefreshToken);
// oauth2VidClient.setCredentials(vidClientRefreshToken);/

exports.imgStorage = google.drive({
    version: 'v3',
    auth: oauth2ImgClient,
});

// exports.vidStorage = google.drive({
//     version: 'v3',
//     auth: oauth2VidClient,
// });
