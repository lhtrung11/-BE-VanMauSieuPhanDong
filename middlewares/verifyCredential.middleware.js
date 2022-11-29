const jwt = require('jsonwebtoken');

exports.verifyCredential = (req, res, next) => {
    // Access Authorization from req header
    const Authorization = req.header('authorization');
    if (!Authorization) {
    }
    // const accessToken = Authorization.replace('Bearer ', '');
    // req.account = jwt.verify(accessToken, process.env.APP_SECRET);
    next();
};
