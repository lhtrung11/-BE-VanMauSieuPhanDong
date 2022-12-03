const {
    verifyCredential,
} = require('../middlewares/verifyCredential.middleware');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const verseRoute = require('./verse.route');
const globalRoute = require('./global.route');
const adminRoute = require('./admin.route');

Route = (app) => {
    // app.use(verifyCredential);
    app.use('/admin', adminRoute);
    app.use('/api/auth', authRoute);
    app.use('/user', userRoute);
    app.use('/verse', verseRoute);
    app.use('/', globalRoute);
};

module.exports = Route;
